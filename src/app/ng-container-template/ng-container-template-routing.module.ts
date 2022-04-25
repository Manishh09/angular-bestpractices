import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgCotainerDemoComponent } from "./ng-cotainer-demo/ng-cotainer-demo.component";
import { NgTemplateDemoComponent } from "./ng-template-demo/ng-template-demo.component";

const routes: Routes = [
  {
    path: 'container',
    component: NgCotainerDemoComponent
  },
  {
    path: 'template',
    component: NgTemplateDemoComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContainerTemplateRoutingModule {}
