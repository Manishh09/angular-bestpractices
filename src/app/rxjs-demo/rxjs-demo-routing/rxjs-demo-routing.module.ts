import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipeDemoComponent } from '../async-pipe-demo/async-pipe-demo.component';
import { WithoutAsyncPipeComponent } from '../without-async-pipe/without-async-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: AsyncPipeDemoComponent
  },
  {
    path: 'without-async-pipe',
    component: WithoutAsyncPipeComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RxjsDemoRoutingModule { }
