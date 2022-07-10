import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiBreadcrumbsComponent } from './vg-ui-breadcrumbs.component';

describe('VgUiBreadcrumbsComponent', () => {
  let component: VgUiBreadcrumbsComponent;
  let fixture: ComponentFixture<VgUiBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiBreadcrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
