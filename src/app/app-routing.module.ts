import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvoidCallBackHellComponent } from './avoid-call-back-hell/avoid-call-back-hell.component';
import { CallBackHellComponent } from './call-back-hell/call-back-hell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CallBackHellComponent
  },
  {
    path: 'avoid-cbh',
    component: AvoidCallBackHellComponent
  },
  {
    path: 'ng',
    loadChildren: () => import('./ng-container-template/ng-container-template.module').then(m => m.NgContainerTemplateModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs-demo/rxjs-demo.module').then(m => m.RxjsDemoModule)
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
