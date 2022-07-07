import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgFormsComponent } from './vg-forms.component';

describe('VgFormsComponent', () => {
  let component: VgFormsComponent;
  let fixture: ComponentFixture<VgFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
