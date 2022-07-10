import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiAccordionComponent } from './vg-ui-accordion.component';

describe('VgUiAccordionComponent', () => {
  let component: VgUiAccordionComponent;
  let fixture: ComponentFixture<VgUiAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
