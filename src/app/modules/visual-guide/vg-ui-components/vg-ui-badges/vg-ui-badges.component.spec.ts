import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiBadgesComponent } from './vg-ui-badges.component';

describe('VgUiBadgesComponent', () => {
  let component: VgUiBadgesComponent;
  let fixture: ComponentFixture<VgUiBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
