import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgLayoutComponent } from './vg-layout.component';

describe('VgLayoutComponent', () => {
  let component: VgLayoutComponent;
  let fixture: ComponentFixture<VgLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
