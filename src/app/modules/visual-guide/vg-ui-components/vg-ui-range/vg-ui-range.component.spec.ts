import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiRangeComponent } from './vg-ui-range.component';

describe('VgUiRangeComponent', () => {
  let component: VgUiRangeComponent;
  let fixture: ComponentFixture<VgUiRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
