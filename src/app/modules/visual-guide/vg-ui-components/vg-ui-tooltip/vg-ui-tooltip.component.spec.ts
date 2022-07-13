import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiTooltipComponent } from './vg-ui-tooltip.component';

describe('VgUiTooltipComponent', () => {
  let component: VgUiTooltipComponent;
  let fixture: ComponentFixture<VgUiTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
