import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityRedirectComponent } from './entity-redirect.component';

describe('EntityRedirectComponent', () => {
  let component: EntityRedirectComponent;
  let fixture: ComponentFixture<EntityRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
