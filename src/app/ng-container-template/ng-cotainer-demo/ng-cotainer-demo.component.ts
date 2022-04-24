import { Component, OnInit } from '@angular/core';
import { concat, concatMap } from 'rxjs';
import { Statistics } from 'src/app/constants/constants';
import { Blog } from 'src/app/models/blog';
import { Stats } from 'src/app/models/stats';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ng-cotainer-demo',
  templateUrl: './ng-cotainer-demo.component.html',
  styleUrls: ['./ng-cotainer-demo.component.scss']
})
export class NgCotainerDemoComponent implements OnInit {
  data: any[] = Statistics;
  headerList = [
    {head: 'Name', id: 1},
    {head: 'Number', id: 2},
    {head: 'Market rate', id: 3},
    {head: 'Weight', id: 4},
    {head: 'Value', id: 5}
  ]
  blogs!: Blog;
  constructor(private _dataServ: DataService) { }

  ngOnInit(): void {
    this._dataServ.getUserData()
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
