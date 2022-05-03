import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipeDemoComponent } from '../async-pipe-demo/async-pipe-demo.component';
import { SubjectsMainComponent } from '../subjects-main/subjects-main.component';
import { BehaviourSubjectComponent } from '../subjects/behaviour-subject-demo/behaviour-subject.component';
import { SubjectComponent } from '../subjects/subject-demo/subject.component';
import { WithoutAsyncPipeComponent } from '../without-async-pipe/without-async-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: AsyncPipeDemoComponent
  },
  {
    path: 'without-async-pipe',
    component: WithoutAsyncPipeComponent
  },
  {
    path: 'subjects',
    component: SubjectsMainComponent
  },
  {
    path: 'subject-demo',
    component: SubjectComponent
  },
  {
    path: 'behav-subject',
    component: BehaviourSubjectComponent
  },

]

@NgModule({
   imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RxjsDemoRoutingModule { }
