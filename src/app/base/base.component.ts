import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnDestroy {

  ngSubscribe$ = new Subject<void>();
  constructor() { }

  ngOnDestroy() {
      this.ngSubscribe$.next();
      this.ngSubscribe$.complete();
  }

}
