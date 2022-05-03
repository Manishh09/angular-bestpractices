import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapDemoComponent } from './switchmap-demo.component';

describe('SwitchmapDemoComponent', () => {
  let component: SwitchmapDemoComponent;
  let fixture: ComponentFixture<SwitchmapDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchmapDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchmapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
