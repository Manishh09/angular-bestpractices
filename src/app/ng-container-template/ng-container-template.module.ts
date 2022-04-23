import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCotainerDemoComponent } from './ng-cotainer-demo/ng-cotainer-demo.component';
import { NgContainerTemplateRoutingModule } from './ng-container-template-routing.module';



@NgModule({
  declarations: [
    NgCotainerDemoComponent
  ],
  imports: [
    CommonModule,
    NgContainerTemplateRoutingModule
  ]
})
export class NgContainerTemplateModule { }
