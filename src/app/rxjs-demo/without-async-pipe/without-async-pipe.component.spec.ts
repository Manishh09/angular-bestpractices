import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutAsyncPipeComponent } from './without-async-pipe.component';

describe('WithoutAsyncPipeComponent', () => {
  let component: WithoutAsyncPipeComponent;
  let fixture: ComponentFixture<WithoutAsyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutAsyncPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
