import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiSpinnersComponent } from './vg-ui-spinners.component';

describe('VgUiSpinnersComponent', () => {
  let component: VgUiSpinnersComponent;
  let fixture: ComponentFixture<VgUiSpinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiSpinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
