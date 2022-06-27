import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgTypographyFontsizeComponent } from './vg-typography-fontsize.component';

describe('VgTypographyFontsizeComponent', () => {
  let component: VgTypographyFontsizeComponent;
  let fixture: ComponentFixture<VgTypographyFontsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgTypographyFontsizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgTypographyFontsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
