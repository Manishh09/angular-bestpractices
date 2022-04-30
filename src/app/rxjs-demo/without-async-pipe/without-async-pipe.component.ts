import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatMap, Subscription } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-without-async-pipe',
  templateUrl: './without-async-pipe.component.html',
  styleUrls: ['./without-async-pipe.component.scss']
})
export class WithoutAsyncPipeComponent implements OnInit, OnDestroy {
  blogs!: Blog;
  subscription!: Subscription;
  constructor(private _dataServ: DataService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription =  this._dataServ.getUserData()
      .pipe(
        concatMap(user => this._dataServ.getBlogById(user.id))
      ).subscribe({
        next: (resp: Blog) => {
          this.blogs = resp;
        }
      }

      );
  }


}
