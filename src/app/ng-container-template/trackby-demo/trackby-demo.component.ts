import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby-demo',
  templateUrl: './trackby-demo.component.html',
  styleUrls: ['./trackby-demo.component.scss']
})
export class TrackbyDemoComponent implements OnInit {

 
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        name: 'UserA', id: 1
      },
      {
        name: 'UserB', id: 2  
      },
      {
        name: 'UserC', id: 3
      },
      {
        name: 'UserD', id: 5
      },
    ] 
  }

  refreshUserData(){
    this.users = [
      {
        name: 'UserA', id: 1
      },
      {
        name: 'UserB', id: 2  
      },
      {
        name: 'UserC', id: 3
      },
      {
        name: 'UserD', id: 5
      },
      {
        name: 'New User', id: 6
      },
    ] 
  }

  trackById(index: number, userObj: User): number {
    return userObj.id;
  }
  trackByIndex(index: number, userObj: User): number {
    return index;
  }

}
type User = {
  name: string, id: number
}
