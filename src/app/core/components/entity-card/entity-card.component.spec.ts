
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Entity } from '../../entity';

import { EntityCardComponent } from './entity-card.component';
import * as Film from './../../../../assets/mocks/films.json';

describe('EntityCardComponent', () => {
  let component: EntityCardComponent;
  let fixture: ComponentFixture<EntityCardComponent>;
  let FilmMock = Film.default.results[0];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ EntityCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.getId(component.entity)).toBe(null);
  });

  it('verify compomemt context and the url to redirect on clicking the card', () => {
    component.entity = FilmMock;
    component.entityType = Entity.Film;
    component.title = FilmMock.title;
    component.route = '/films/details';
    fixture.detectChanges();
    expect(component.entity).toBe(FilmMock);
    expect(component.entityType).toBe(Entity.Film);
    expect(component.title).toBe(FilmMock.title);
  });

});
