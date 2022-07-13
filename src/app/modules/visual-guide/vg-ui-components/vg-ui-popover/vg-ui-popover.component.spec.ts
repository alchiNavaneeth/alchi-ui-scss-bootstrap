import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiPopoverComponent } from './vg-ui-popover.component';

describe('VgUiPopoverComponent', () => {
  let component: VgUiPopoverComponent;
  let fixture: ComponentFixture<VgUiPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
