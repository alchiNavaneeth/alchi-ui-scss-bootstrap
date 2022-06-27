import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgTypographyComponent } from './vg-typography.component';

describe('VgTypographyComponent', () => {
  let component: VgTypographyComponent;
  let fixture: ComponentFixture<VgTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgTypographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
