import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgTypographyHeadersComponent } from './vg-typography-headers.component';

describe('VgTypographyHeadersComponent', () => {
  let component: VgTypographyHeadersComponent;
  let fixture: ComponentFixture<VgTypographyHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgTypographyHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgTypographyHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
