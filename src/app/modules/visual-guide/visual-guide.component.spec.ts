import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualGuideComponent } from './visual-guide.component';

describe('VisualGuideComponent', () => {
  let component: VisualGuideComponent;
  let fixture: ComponentFixture<VisualGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
