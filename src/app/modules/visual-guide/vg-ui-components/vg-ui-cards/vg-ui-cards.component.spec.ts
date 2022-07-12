import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiCardsComponent } from './vg-ui-cards.component';

describe('VgUiCardsComponent', () => {
  let component: VgUiCardsComponent;
  let fixture: ComponentFixture<VgUiCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
