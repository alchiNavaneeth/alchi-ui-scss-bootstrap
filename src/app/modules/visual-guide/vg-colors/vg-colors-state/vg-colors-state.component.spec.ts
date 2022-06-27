import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgColorsStateComponent } from './vg-colors-state.component';

describe('VgColorsStateComponent', () => {
  let component: VgColorsStateComponent;
  let fixture: ComponentFixture<VgColorsStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgColorsStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgColorsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
