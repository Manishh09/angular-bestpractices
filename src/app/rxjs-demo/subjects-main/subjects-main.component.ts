import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsDemoService } from '../subjects-demo.service';

@Component({
  selector: 'app-subjects-main',
  templateUrl: './subjects-main.component.html',
  styleUrls: ['./subjects-main.component.scss']
})
export class SubjectsMainComponent implements OnInit {

  constructor(private _serv: SubjectsDemoService, private router: Router) { }

  ngOnInit(): void {
  }

  navTo(input: string){

    const route = input === 'subj' ? 'rxjs/subject-demo' : 'rxjs/behav-subject';
    const title = input === 'subj' ? 'Subject Demo' : 'Behaviour Subject Demo';
    this.router.navigateByUrl(route);
    this._serv.subject.next(title);
    this._serv.bsubject.next(title);
  }

}
