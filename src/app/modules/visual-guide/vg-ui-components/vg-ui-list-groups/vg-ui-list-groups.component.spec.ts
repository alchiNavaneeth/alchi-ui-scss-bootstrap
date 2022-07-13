import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiListGroupsComponent } from './vg-ui-list-groups.component';

describe('VgUiListGroupsComponent', () => {
  let component: VgUiListGroupsComponent;
  let fixture: ComponentFixture<VgUiListGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiListGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
