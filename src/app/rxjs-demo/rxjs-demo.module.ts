import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncPipeDemoComponent } from './async-pipe-demo/async-pipe-demo.component';
import { RxjsDemoRoutingModule } from './rxjs-demo-routing/rxjs-demo-routing.module';
import { WithoutAsyncPipeComponent } from './without-async-pipe/without-async-pipe.component';



@NgModule({
  declarations: [
    AsyncPipeDemoComponent,
    WithoutAsyncPipeComponent
  ],
  imports: [
    CommonModule,
    RxjsDemoRoutingModule
  ]
})
export class RxjsDemoModule { }
