import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiButtonGroupsComponent } from './vg-ui-button-groups.component';

describe('VgUiButtonGroupsComponent', () => {
  let component: VgUiButtonGroupsComponent;
  let fixture: ComponentFixture<VgUiButtonGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiButtonGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiButtonGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
