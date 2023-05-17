import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgCotainerDemoComponent } from "./ng-cotainer-demo/ng-cotainer-demo.component";
import { NgTemplateDemoComponent } from "./ng-template-demo/ng-template-demo.component";
import { TrackbyDemoComponent } from "./trackby-demo/trackby-demo.component";

const routes: Routes = [
  {
    path: '',
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
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContainerTemplateRoutingModule {}
