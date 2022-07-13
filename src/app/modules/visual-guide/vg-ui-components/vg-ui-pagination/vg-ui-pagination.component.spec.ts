import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiPaginationComponent } from './vg-ui-pagination.component';

describe('VgUiPaginationComponent', () => {
  let component: VgUiPaginationComponent;
  let fixture: ComponentFixture<VgUiPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
