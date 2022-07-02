import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgIconographyComponent } from './vg-iconography.component';

describe('VgIconographyComponent', () => {
  let component: VgIconographyComponent;
  let fixture: ComponentFixture<VgIconographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgIconographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgIconographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
