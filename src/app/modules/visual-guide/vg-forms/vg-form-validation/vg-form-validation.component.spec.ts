import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgFormValidationComponent } from './vg-form-validation.component';

describe('VgFormValidationComponent', () => {
  let component: VgFormValidationComponent;
  let fixture: ComponentFixture<VgFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgFormValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
