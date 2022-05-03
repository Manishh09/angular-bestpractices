import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatmapDemoComponent } from './flatmap-demo.component';

describe('FlatmapDemoComponent', () => {
  let component: FlatmapDemoComponent;
  let fixture: ComponentFixture<FlatmapDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatmapDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatmapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
