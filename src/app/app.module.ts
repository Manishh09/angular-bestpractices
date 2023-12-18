import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvoidCallBackHellComponent } from './avoid-call-back-hell/avoid-call-back-hell.component';
import { BaseComponent } from './base/base.component';
import { CallBackHellComponent } from './call-back-hell/call-back-hell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisableRightClickDirective } from './directives/disable-right-click.directive';
import { UpperCasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
   // UserComponent,
    CallBackHellComponent,
    AvoidCallBackHellComponent,
    BaseComponent,
    PageNotFoundComponent,
    HighlightDirective,
    UpperCasePipe,
    DisableRightClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
