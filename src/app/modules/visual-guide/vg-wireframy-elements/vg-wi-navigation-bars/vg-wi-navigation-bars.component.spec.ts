import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgWiNavigationBarsComponent } from './vg-wi-navigation-bars.component';

describe('VgWiNavigationBarsComponent', () => {
  let component: VgWiNavigationBarsComponent;
  let fixture: ComponentFixture<VgWiNavigationBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgWiNavigationBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgWiNavigationBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
