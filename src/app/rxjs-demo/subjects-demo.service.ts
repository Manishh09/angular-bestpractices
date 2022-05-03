import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsDemoService {
  subject = new Subject<unknown>();
  bsubject = new BehaviorSubject<unknown>(null);
  subObservable$: Observable<unknown>;
  behavSubObservable$: Observable<unknown>;
  constructor() {
    this.subObservable$ = this.subject.asObservable();
    this.behavSubObservable$ = this.bsubject.asObservable();
  }
}
