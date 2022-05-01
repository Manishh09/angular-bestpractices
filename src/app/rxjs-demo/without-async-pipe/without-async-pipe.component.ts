import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatMap, Subject, takeUntil } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-without-async-pipe',
  templateUrl: './without-async-pipe.component.html',
  styleUrls: ['./without-async-pipe.component.scss']
})
export class WithoutAsyncPipeComponent implements OnInit, OnDestroy {
  blogs!: Blog;
  //subscription!: Subscription;
  sub$ = new Subject<void>();
  constructor(private _dataServ: DataService) { }
  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
   this.sub$.next();
   this.sub$.complete();
  }

  ngOnInit(): void {
    // this.subscription =  this._dataServ.getUserData()
    //   .pipe(
    //     concatMap(user => this._dataServ.getBlogById(user.id))
    //   ).subscribe({
    //     next: (resp: Blog) => {
    //       this.blogs = resp;
    //     }
    //   });

    this._dataServ.getUserData()
      .pipe(
        takeUntil(this.sub$), // stream gets emitted and automatically unsubscribed until this.sub$ is completed.
        concatMap(user => this._dataServ.getBlogById(user.id))
      ).subscribe({
        next: (resp: Blog) => {
          this.blogs = resp;
        }
      });
  }


}
