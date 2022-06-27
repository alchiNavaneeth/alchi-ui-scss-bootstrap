import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgColorsUtilityComponent } from './vg-colors-utility.component';

describe('VgColorsUtilityComponent', () => {
  let component: VgColorsUtilityComponent;
  let fixture: ComponentFixture<VgColorsUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgColorsUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgColorsUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
