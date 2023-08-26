import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bestpractices';
  validURL = false;
  constructor(private router: Router){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        console.log(event.url);
      }
      });
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
