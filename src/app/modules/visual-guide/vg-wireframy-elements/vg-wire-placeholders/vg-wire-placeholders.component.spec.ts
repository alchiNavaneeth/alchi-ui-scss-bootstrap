import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgWirePlaceholdersComponent } from './vg-wire-placeholders.component';

describe('VgWirePlaceholdersComponent', () => {
  let component: VgWirePlaceholdersComponent;
  let fixture: ComponentFixture<VgWirePlaceholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgWirePlaceholdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgWirePlaceholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
