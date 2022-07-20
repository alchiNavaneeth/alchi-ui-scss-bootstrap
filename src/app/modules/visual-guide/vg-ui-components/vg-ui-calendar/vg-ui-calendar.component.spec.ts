import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiCalendarComponent } from './vg-ui-calendar.component';

describe('VgUiCalendarComponent', () => {
  let component: VgUiCalendarComponent;
  let fixture: ComponentFixture<VgUiCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
