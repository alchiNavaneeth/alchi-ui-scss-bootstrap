import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgWireSideNavigationBarsComponent } from './vg-wire-side-navigation-bars.component';

describe('VgWireSideNavigationBarsComponent', () => {
  let component: VgWireSideNavigationBarsComponent;
  let fixture: ComponentFixture<VgWireSideNavigationBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgWireSideNavigationBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgWireSideNavigationBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
