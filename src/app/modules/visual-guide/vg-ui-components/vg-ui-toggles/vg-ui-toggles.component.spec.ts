import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiTogglesComponent } from './vg-ui-toggles.component';

describe('VgUiTogglesComponent', () => {
  let component: VgUiTogglesComponent;
  let fixture: ComponentFixture<VgUiTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiTogglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
