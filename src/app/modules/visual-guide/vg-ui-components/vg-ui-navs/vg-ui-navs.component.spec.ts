import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiNavsComponent } from './vg-ui-navs.component';

describe('VgUiNavsComponent', () => {
  let component: VgUiNavsComponent;
  let fixture: ComponentFixture<VgUiNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiNavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
