import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiModalsComponent } from './vg-ui-modals.component';

describe('VgUiModalsComponent', () => {
  let component: VgUiModalsComponent;
  let fixture: ComponentFixture<VgUiModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
