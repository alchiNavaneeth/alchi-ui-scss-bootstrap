import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiDatepickerComponent } from './vg-ui-datepicker.component';

describe('VgUiDatepickerComponent', () => {
  let component: VgUiDatepickerComponent;
  let fixture: ComponentFixture<VgUiDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
