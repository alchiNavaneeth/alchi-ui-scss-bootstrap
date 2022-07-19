import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgWireChatComponent } from './vg-wire-chat.component';

describe('VgWireChatComponent', () => {
  let component: VgWireChatComponent;
  let fixture: ComponentFixture<VgWireChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgWireChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgWireChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
