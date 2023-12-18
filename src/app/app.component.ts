import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('userCompRef', { read: ViewContainerRef })
  userCompRef!: ViewContainerRef;
  title = 'angular-bestpractices';
  validURL = false;
  constructor(private router: Router){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        console.log(event.url);
      }
      });
  }

  create(): void {
    this.userCompRef.clear()
    this.userCompRef.createComponent(UserComponent);
  }

validateURL(value: any) {
  let valid = true;
  try {
      if (value) {
         let validUrl =  new URL(value);
         if(validUrl.host == "" && validUrl.origin == "null"){
          valid = false;
         }
         this.validURL = valid;
      }
  } catch {
      valid = false;
      this.validURL = valid;
  }
  this.validURL = valid;
  return valid ? null : { invalidUrl: true };
}

}
