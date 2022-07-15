import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiScrollbarComponent } from './vg-ui-scrollbar.component';

describe('VgUiScrollbarComponent', () => {
  let component: VgUiScrollbarComponent;
  let fixture: ComponentFixture<VgUiScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiScrollbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
