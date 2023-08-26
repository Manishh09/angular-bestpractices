import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, tap } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-avoid-call-back-hell',
  templateUrl: './avoid-call-back-hell.component.html',
  styleUrls: ['./avoid-call-back-hell.component.scss']
})
export class AvoidCallBackHellComponent implements OnInit {
  data$!: Observable<any>;

  constructor(private _dataServ: DataService) { }

  ngOnInit(): void {
    const url= "https://www.google.com"
    window.open(url,"_blank")
    this.data$ = this._dataServ.getUserData().pipe(
     // map( user => this._dataServ.getBlogById(user.id)), // map - returns observable, here it returned value of overvable of observable
      concatMap( user => this._dataServ.getBlogById(user.id)), // higher order operator wil rescue to avaoid call back hell.
      tap(user => console.log(user)),

    )
  }

}
