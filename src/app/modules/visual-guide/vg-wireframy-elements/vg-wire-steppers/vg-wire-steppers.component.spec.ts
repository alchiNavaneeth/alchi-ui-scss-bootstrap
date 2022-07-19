import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgWireSteppersComponent } from './vg-wire-steppers.component';

describe('VgWireSteppersComponent', () => {
  let component: VgWireSteppersComponent;
  let fixture: ComponentFixture<VgWireSteppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgWireSteppersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgWireSteppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
