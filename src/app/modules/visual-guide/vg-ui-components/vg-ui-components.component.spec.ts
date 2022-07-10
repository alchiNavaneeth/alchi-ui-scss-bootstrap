import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiComponentsComponent } from './vg-ui-components.component';

describe('VgUiComponentsComponent', () => {
  let component: VgUiComponentsComponent;
  let fixture: ComponentFixture<VgUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
