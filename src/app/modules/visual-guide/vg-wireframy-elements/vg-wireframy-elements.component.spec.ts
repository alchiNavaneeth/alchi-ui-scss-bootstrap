import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgWireframyElementsComponent } from './vg-wireframy-elements.component';

describe('VgWireframyElementsComponent', () => {
  let component: VgWireframyElementsComponent;
  let fixture: ComponentFixture<VgWireframyElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgWireframyElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgWireframyElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
