import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiToastsComponent } from './vg-ui-toasts.component';

describe('VgUiToastsComponent', () => {
  let component: VgUiToastsComponent;
  let fixture: ComponentFixture<VgUiToastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiToastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
