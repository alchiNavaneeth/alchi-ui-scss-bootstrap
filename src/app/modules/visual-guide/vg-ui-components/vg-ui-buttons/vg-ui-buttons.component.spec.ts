import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiButtonsComponent } from './vg-ui-buttons.component';

describe('VgUiButtonsComponent', () => {
  let component: VgUiButtonsComponent;
  let fixture: ComponentFixture<VgUiButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
