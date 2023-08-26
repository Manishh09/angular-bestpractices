import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { User } from '../models/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-call-back-hell',
  templateUrl: './call-back-hell.component.html',
  styleUrls: ['./call-back-hell.component.scss']
})
export class CallBackHellComponent implements OnInit {
  data!: any;
  constructor(private _dataServ: DataService) {

  }

  ngOnInit(): void {
    // nested api calls
    // lead to callback hell
    // Pattern is Anti-Pattern  - RxJS
    this._dataServ.getUserData()
    .subscribe({
      next: (user: User) =>{
        this._dataServ.getBlogById(user.id)
        .subscribe({
          next: (blog: Blog) =>{
            console.log(`blog`, blog);
            this.data = blog;
            //...........other api call snippets
          }
        })
      }
    })
  }


}
