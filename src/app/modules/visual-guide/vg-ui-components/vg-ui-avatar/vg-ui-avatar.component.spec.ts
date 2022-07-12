import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgUiAvatarComponent } from './vg-ui-avatar.component';

describe('VgUiAvatarComponent', () => {
  let component: VgUiAvatarComponent;
  let fixture: ComponentFixture<VgUiAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgUiAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgUiAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
