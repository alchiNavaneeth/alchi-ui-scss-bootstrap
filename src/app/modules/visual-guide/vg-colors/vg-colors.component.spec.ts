import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgColorsComponent } from './vg-colors.component';

describe('VgColorsComponent', () => {
  let component: VgColorsComponent;
  let fixture: ComponentFixture<VgColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
