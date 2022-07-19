import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgWireNotificationComponent } from './vg-wire-notification.component';

describe('VgWireNotificationComponent', () => {
  let component: VgWireNotificationComponent;
  let fixture: ComponentFixture<VgWireNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgWireNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgWireNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
