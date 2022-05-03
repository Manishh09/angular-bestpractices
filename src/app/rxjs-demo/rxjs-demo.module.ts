import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncPipeDemoComponent } from './async-pipe-demo/async-pipe-demo.component';
import { RxjsDemoRoutingModule } from './rxjs-demo-routing/rxjs-demo-routing.module';
import { BehaviourSubjectComponent } from './subjects/behaviour-subject-demo/behaviour-subject.component';
import { SubjectComponent } from './subjects/subject-demo/subject.component';
import { WithoutAsyncPipeComponent } from './without-async-pipe/without-async-pipe.component';
import { SubjectsMainComponent } from './subjects-main/subjects-main.component';



@NgModule({
  declarations: [
    AsyncPipeDemoComponent,
    WithoutAsyncPipeComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    SubjectsMainComponent
  ],
  imports: [
    CommonModule,
    RxjsDemoRoutingModule
  ]
})
export class RxjsDemoModule { }
