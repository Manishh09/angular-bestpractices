import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectsDemoService } from '../../subjects-demo.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  titile$: Observable<unknown>;


  constructor(private route: Router,private serv: SubjectsDemoService) {
    this.titile$ = this.serv.subObservable$;
  }

  ngOnInit(): void {
  }

  navTo(){
    this.route.navigateByUrl('rxjs/subjects');
  }
}
