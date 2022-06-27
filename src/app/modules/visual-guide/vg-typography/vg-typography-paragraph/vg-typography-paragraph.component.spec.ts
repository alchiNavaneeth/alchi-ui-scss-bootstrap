import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgTypographyParagraphComponent } from './vg-typography-paragraph.component';

describe('VgTypographyParagraphComponent', () => {
  let component: VgTypographyParagraphComponent;
  let fixture: ComponentFixture<VgTypographyParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgTypographyParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgTypographyParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
