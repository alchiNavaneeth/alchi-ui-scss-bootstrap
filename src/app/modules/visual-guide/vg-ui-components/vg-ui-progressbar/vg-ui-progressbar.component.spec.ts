import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiProgressbarComponent } from './vg-ui-progressbar.component';

describe('VgUiProgressbarComponent', () => {
  let component: VgUiProgressbarComponent;
  let fixture: ComponentFixture<VgUiProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
