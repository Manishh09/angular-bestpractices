import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NgContentDemoComponent } from '../ng-content-demo/ng-content-demo.component';
import { NgCotainerDemoComponent } from '../ng-cotainer-demo/ng-cotainer-demo.component';
import { NgTemplateDemoComponent } from '../ng-template-demo/ng-template-demo.component';
import { TrackbyDemoComponent } from '../trackby-demo/trackby-demo.component';

@Component({
  selector: 'app-ng-home',
  templateUrl: './ng-home.component.html',
  styleUrls: ['./ng-home.component.scss'],
})
export class NgHomeComponent {
  @ViewChild('ngTempateContainerRef', { read: ViewContainerRef })
  ngTempateContainerRef!: ViewContainerRef;

  @ViewChild('ngContentContainerRef', { read: ViewContainerRef })
  ngContentContainerRef!: ViewContainerRef;

  @ViewChild('ngContainerRef', { read: ViewContainerRef })
  ngContainerRef!: ViewContainerRef;

  @ViewChild('ngTempateContainerRef', { read: ViewContainerRef })
  trackByContainerRef!: ViewContainerRef;

  createComponent(name: string) {
    [
      this.ngTempateContainerRef,
      this.ngContentContainerRef,
      this.trackByContainerRef,
      this.ngContainerRef,
    ].forEach((x) => x.clear());
    if (name === 'template') {
      this.ngTempateContainerRef.createComponent(NgTemplateDemoComponent);
    } else if (name === 'content') {
      this.ngContentContainerRef.createComponent(NgContentDemoComponent);
    } else if (name === 'container') {
      this.ngContentContainerRef.createComponent(NgCotainerDemoComponent);
    } else {
      this.trackByContainerRef.createComponent(TrackbyDemoComponent);
    }
  }
}
