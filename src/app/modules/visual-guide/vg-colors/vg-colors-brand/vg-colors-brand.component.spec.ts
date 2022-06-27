import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgColorsBrandComponent } from './vg-colors-brand.component';

describe('VgColorsBrandComponent', () => {
  let component: VgColorsBrandComponent;
  let fixture: ComponentFixture<VgColorsBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgColorsBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgColorsBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
