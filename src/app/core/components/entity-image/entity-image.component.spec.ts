import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityImageComponent } from './entity-image.component';

describe('EntityImageComponent', () => {
  let component: EntityImageComponent;
  let fixture: ComponentFixture<EntityImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
