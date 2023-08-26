import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CallBackHellComponent } from './call-back-hell/call-back-hell.component';
import { AvoidCallBackHellComponent } from './avoid-call-back-hell/avoid-call-back-hell.component';
import { BaseComponent } from './base/base.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CallBackHellComponent,
    AvoidCallBackHellComponent,
    BaseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
