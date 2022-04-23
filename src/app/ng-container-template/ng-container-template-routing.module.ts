import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgCotainerDemoComponent } from "./ng-cotainer-demo/ng-cotainer-demo.component";

const routes: Routes = [
  {
    path: '',
    component: NgCotainerDemoComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContainerTemplateRoutingModule {}
