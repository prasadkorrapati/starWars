import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Entity } from '../entity';
import { Character, Film, Planet, SwapiResponse } from '../types';

import * as mockedFilms from './../../../assets/mocks/films.json';
import * as mockedfilmDetails from './../../../assets/mocks/filmDetails.json';
import * as characterDetails from './../../../assets/mocks/characterDetails.json';
import * as planetDetails from './../../../assets/mocks/planetDetails.json';
import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
  let service: SwapiService;
  const mockedFilmResponse: SwapiResponse = mockedFilms.default;
  const mockedfilmDetailsResponse: Film = mockedfilmDetails.default;
  const mockedCharacterDetailsResponse: Character = characterDetails.default;
  const mockedPlanetDetailsResponse: Planet = planetDetails.default;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SwapiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verify getStarWars service', () => {
    service.getStarWars(Entity.Film).subscribe( (res) => {
      expect(res).toBe(mockedFilmResponse);
    });

    const req = httpMock.expectOne('https://swapi.dev/api/films/');
    expect(req.request.method).toBe('GET');
    req.flush(mockedFilmResponse);
    httpMock.verify();
  });

  it('verify getStarWars service', (done) => {
    service.getFilmDetails('1').subscribe( (res) => {
      expect(res).toBe(mockedfilmDetailsResponse);
      done();
    });

    const req = httpMock.expectOne('https://swapi.dev/api/films/1/');
    expect(req.request.method).toBe('GET');
    req.flush(mockedfilmDetailsResponse);
    httpMock.verify();
  });

  it('verify getFilmDetails service', (done) => {
    
    service.getFilmDetails('1').subscribe( (res) => {
      expect(res).toBe(mockedfilmDetailsResponse);
      done();
    });

    const req = httpMock.expectOne('https://swapi.dev/api/films/1/');
    expect(req.request.method).toBe('GET');
    req.flush(mockedfilmDetailsResponse);
    httpMock.verify();
  });

  it('verify getCharacterDetails', (done) => {
    service.getCharacterDetails('1').subscribe( (res) => {
      expect(res).toBe(mockedCharacterDetailsResponse);
      done();
    });

    const req = httpMock.expectOne('https://swapi.dev/api/people/1/');
    expect(req.request.method).toBe('GET');
    req.flush(mockedCharacterDetailsResponse);
    httpMock.verify();
  })

  it('verify getPlanetDetails', (done) => {
    service.getPlanetDetails('1').subscribe( (res) => {
      expect(res).toBe(mockedPlanetDetailsResponse);
      done();
    });

    const req = httpMock.expectOne('https://swapi.dev/api/planets/1/');
    expect(req.request.method).toBe('GET');
    req.flush(mockedPlanetDetailsResponse);
    httpMock.verify();
  })
});
