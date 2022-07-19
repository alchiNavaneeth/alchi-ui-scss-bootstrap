import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgWireIcongroupsComponent } from './vg-wire-icongroups.component';

describe('VgWireIcongroupsComponent', () => {
  let component: VgWireIcongroupsComponent;
  let fixture: ComponentFixture<VgWireIcongroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgWireIcongroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgWireIcongroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
