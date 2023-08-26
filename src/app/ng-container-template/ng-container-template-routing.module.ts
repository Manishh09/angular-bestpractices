import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgContentDemoComponent } from "./ng-content-demo/ng-content-demo.component";
import { NgCotainerDemoComponent } from "./ng-cotainer-demo/ng-cotainer-demo.component";
import { NgHomeComponent } from "./ng-home/ng-home.component";
import { NgTemplateDemoComponent } from "./ng-template-demo/ng-template-demo.component";
import { TrackbyDemoComponent } from "./trackby-demo/trackby-demo.component";

const routes: Routes = [

  {
    path: '',
    component: NgHomeComponent
  },
  {
    path: 'track-by',
    component: TrackbyDemoComponent
  },

  {
    path: 'container',
    component: NgCotainerDemoComponent
  },
  {
    path: 'template',
    component: NgTemplateDemoComponent
  },
  {
    path: 'content',
    component: NgContentDemoComponent
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContainerTemplateRoutingModule {}
