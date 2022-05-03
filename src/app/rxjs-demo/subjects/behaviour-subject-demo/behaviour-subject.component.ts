import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectsDemoService } from '../../subjects-demo.service';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  title$!: Observable<unknown>;
  constructor(private route: Router, private serv: SubjectsDemoService) {
    this.title$ = this.serv.behavSubObservable$;
   }

  ngOnInit(): void {
  }
  navTo(){
    this.route.navigateByUrl('rxjs/subjects');
  }
}
