import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgFormControlComponent } from './vg-form-control.component';

describe('VgFormControlComponent', () => {
  let component: VgFormControlComponent;
  let fixture: ComponentFixture<VgFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
