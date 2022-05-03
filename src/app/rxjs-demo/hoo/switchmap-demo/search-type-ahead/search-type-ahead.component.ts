import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-type-ahead',
  templateUrl: './search-type-ahead.component.html',
  styleUrls: ['./search-type-ahead.component.scss']
})
export class SearchTypeAheadComponent implements OnInit {

  @ViewChild('search',{ static: true }) search!: ElementRef;

  states!: any[];
  constructor(private serv: DataService) { }

  ngOnInit(): void {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map( (event: any) => event.target.value),
        debounceTime(1000), // triggers api after 1 second - doesnt trigger for every character typed
        switchMap( (searchTerm: string) => this.serv.getData(searchTerm))
      ).subscribe({
        next: (stat: any) => {
          this.states = stat;
        }
      })
  }




}
