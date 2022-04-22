import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidCallBackHellComponent } from './avoid-call-back-hell.component';

describe('AvoidCallBackHellComponent', () => {
  let component: AvoidCallBackHellComponent;
  let fixture: ComponentFixture<AvoidCallBackHellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvoidCallBackHellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidCallBackHellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
