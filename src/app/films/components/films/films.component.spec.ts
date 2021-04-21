import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { SwapiResponse } from 'src/app/core/types';
import * as mockedFilms from './../../../../assets/mocks/films.json';
import { FilmsComponent } from './films.component';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;
  let swapiService: SwapiService;
  const mockedPlanetResponse: SwapiResponse = mockedFilms.default;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ FilmsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    swapiService = TestBed.inject(SwapiService);
  });

  beforeEach( () => {
    spyOn(swapiService, 'getStarWars').and.callFake( () => of(mockedPlanetResponse));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify the planets on the component conect once load from the server', () => {
    component.ngOnInit();
    expect(component.films.length).toBe(mockedPlanetResponse.results.length);
    expect(component.entityType).toBe(Entity.Film);
  });

  it('verify unsubscribing of the observables', () => {
    spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['subscription'].unsubscribe).toHaveBeenCalledTimes(1);
  });
});
