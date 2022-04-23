import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCotainerDemoComponent } from './ng-cotainer-demo.component';

describe('NgCotainerDemoComponent', () => {
  let component: NgCotainerDemoComponent;
  let fixture: ComponentFixture<NgCotainerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCotainerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCotainerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
