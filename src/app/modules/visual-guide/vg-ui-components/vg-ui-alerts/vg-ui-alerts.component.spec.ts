import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiAlertsComponent } from './vg-ui-alerts.component';

describe('VgUiAlertsComponent', () => {
  let component: VgUiAlertsComponent;
  let fixture: ComponentFixture<VgUiAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
