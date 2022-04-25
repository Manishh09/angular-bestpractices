import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgContainerTemplateRoutingModule } from './ng-container-template-routing.module';
import { NgContentDemoComponent } from './ng-content-demo/ng-content-demo.component';
import { NgCotainerDemoComponent } from './ng-cotainer-demo/ng-cotainer-demo.component';
import { NgTemplateDemoComponent } from './ng-template-demo/ng-template-demo.component';


@NgModule({
  declarations: [
    NgCotainerDemoComponent,
    NgContentDemoComponent,
    NgTemplateDemoComponent
  ],
  imports: [
    CommonModule,
    NgContainerTemplateRoutingModule
  ]
})
export class NgContainerTemplateModule { }
