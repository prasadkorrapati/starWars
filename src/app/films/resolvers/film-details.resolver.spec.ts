import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Film } from 'src/app/core/types';

import { FilmDetailsResolver } from './film-details.resolver';

describe('FilmDetailsResolver', () => {
  let resolver: FilmDetailsResolver;
  let route: ActivatedRouteSnapshot;
  let swapiService: SwapiService;
  const mockedFilmDetails: Film = {
    characters: ['http://swapi.dev/api/people/1/'],
    created: '2014-12-10T14:23:31.880000Z',
    director: 'George Lucas',
    edited: '2014-12-20T19:49:45.256000Z',
    episode_id: 4,
    opening_crawl: 'It is a period of civil war.',
    planets: ['http://swapi.dev/api/planets/1/', 'http://swapi.dev/api/planets/2/', 'http://swapi.dev/api/planets/3/'],
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25',
    species: ['http://swapi.dev/api/species/1/'],
    starships:  ['http://swapi.dev/api/starships/2/'],
    title: 'A New Hope',
    url: 'http://swapi.dev/api/films/1/',
    vehicles: ['http://swapi.dev/api/vehicles/4/']
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    resolver = TestBed.inject(FilmDetailsResolver);
    swapiService = TestBed.inject(SwapiService);
    route = new ActivatedRouteSnapshot();
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  beforeEach( () => {
    spyOn(swapiService, 'getFilmDetails').and.callFake( () => {
      return of(mockedFilmDetails);
    });
  });

  it('verify data returned from resolver', () => {
    const entityId = '1';
    spyOn(route.paramMap, 'get').and.returnValue(entityId);
    resolver.resolve(route, null).subscribe( (res) => {
      expect(res).toBe(mockedFilmDetails);
    });
    expect(swapiService.getFilmDetails).toHaveBeenCalledWith(entityId);
  })
});
