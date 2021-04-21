import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify toggle header toggle functionality', () => {
    expect(component.collapse).toBe(true);
    component.toggle();
    // On Clicking on toggle button, header mebu should be closed, when it is opened.
    expect(component.collapse).toBe(false);
    component.toggle();
    // On Clicking on toggle button, header mebu should be opened, when it is closed.
    expect(component.collapse).toBe(true);
  })
});
