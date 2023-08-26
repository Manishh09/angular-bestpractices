import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscription, concatMap } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-async-pipe-demo',
  templateUrl: './async-pipe-demo.component.html',
  styleUrls: ['./async-pipe-demo.component.scss']
})
export class AsyncPipeDemoComponent implements OnInit {

  blogs$!: Observable<Blog>;
  subscription!: Subscription;
  constructor(private _dataServ: DataService, private domSan: DomSanitizer) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    this.withAsyncPipe();
  }






  withAsyncPipe() {
    this.blogs$ = this._dataServ.getUserData()
      .pipe(
        concatMap(user => this._dataServ.getBlogById(user.id))
      )



  }
}
