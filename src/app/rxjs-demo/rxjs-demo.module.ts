import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsyncPipeDemoComponent } from './async-pipe-demo/async-pipe-demo.component';
import { ConcatmapDemoComponent } from './hoo/concatmap-demo/concatmap-demo.component';
import { FlatmapDemoComponent } from './hoo/flatmap-demo/flatmap-demo.component';
import { MergemapDemoComponent } from './hoo/mergemap-demo/mergemap-demo.component';
import { SearchTypeAheadComponent } from './hoo/switchmap-demo/search-type-ahead/search-type-ahead.component';
import { SwitchmapDemoComponent } from './hoo/switchmap-demo/switchmap-demo.component';
import { RxjsDemoRoutingModule } from './rxjs-demo-routing/rxjs-demo-routing.module';
import { SubjectsMainComponent } from './subjects-main/subjects-main.component';
import { BehaviourSubjectComponent } from './subjects/behaviour-subject-demo/behaviour-subject.component';
import { SubjectComponent } from './subjects/subject-demo/subject.component';
import { WithoutAsyncPipeComponent } from './without-async-pipe/without-async-pipe.component';



@NgModule({
  declarations: [
    AsyncPipeDemoComponent,
    WithoutAsyncPipeComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    SubjectsMainComponent,
    SwitchmapDemoComponent,
    ConcatmapDemoComponent,
    MergemapDemoComponent,
    FlatmapDemoComponent,
    SearchTypeAheadComponent
  ],
  imports: [
    CommonModule,
    RxjsDemoRoutingModule
  ]
})
export class RxjsDemoModule { }
