import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiTableComponent } from './vg-ui-table.component';

describe('VgUiTableComponent', () => {
  let component: VgUiTableComponent;
  let fixture: ComponentFixture<VgUiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
