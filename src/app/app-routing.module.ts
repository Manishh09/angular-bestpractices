import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvoidCallBackHellComponent } from './avoid-call-back-hell/avoid-call-back-hell.component';
import { CallBackHellComponent } from './call-back-hell/call-back-hell.component';

const routes: Routes = [
  {
    path: '',
    component: CallBackHellComponent
  },
  {
    path: 'avoid-cbh',
    component: AvoidCallBackHellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
