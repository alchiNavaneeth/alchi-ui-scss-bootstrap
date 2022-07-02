import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgLayoutGridComponent } from './vg-layout-grid.component';

describe('VgLayoutGridComponent', () => {
  let component: VgLayoutGridComponent;
  let fixture: ComponentFixture<VgLayoutGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgLayoutGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgLayoutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
