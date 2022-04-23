import { Component, OnInit } from '@angular/core';
import { Statistics } from 'src/app/constants/constants';
import { Stats } from 'src/app/models/stats';

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
  constructor() { }

  ngOnInit(): void {
    this.data.map(( x: any, index)=> {
      this.headerList.forEach( (head, id) =>{
        if(index === id){
          x['head'] = head.head;
        }
      })
    })
    console.log(this.data);

  }

}
