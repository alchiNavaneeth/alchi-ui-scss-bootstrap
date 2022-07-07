import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgFormLayoutComponent } from './vg-form-layout.component';

describe('VgFormLayoutComponent', () => {
  let component: VgFormLayoutComponent;
  let fixture: ComponentFixture<VgFormLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgFormLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
