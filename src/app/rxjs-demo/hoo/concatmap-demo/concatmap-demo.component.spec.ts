import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapDemoComponent } from './concatmap-demo.component';

describe('ConcatmapDemoComponent', () => {
  let component: ConcatmapDemoComponent;
  let fixture: ComponentFixture<ConcatmapDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatmapDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatmapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
