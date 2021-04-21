import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Character } from 'src/app/core/types';

import { CharacterDetailsResolver } from './character-details.resolver';

describe('CharacterDetailsResolver', () => {
  let resolver: CharacterDetailsResolver;
  let route: ActivatedRouteSnapshot;
  let swapiService: SwapiService;
  const mockedCharacter: Character = {
    birth_year: '112BBY',
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    eye_color: 'yellow',
    films: ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/2/'],
    gender: 'n/a',
    hair_color: 'n/a',
    height: '167',
    homeworld: 'http://swapi.dev/api/planets/1/',
    mass: '75',
    name: 'C-3PO',
    skin_color: 'gold',
    species: ['http://swapi.dev/api/species/2/'],
    starships: [],
    url: 'http://swapi.dev/api/people/2/',
    vehicles: []
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    resolver = TestBed.inject(CharacterDetailsResolver);
    swapiService = TestBed.inject(SwapiService)
    route = new ActivatedRouteSnapshot();
  });

  beforeEach( () => {
    spyOn(swapiService, 'getCharacterDetails').and.callFake( () => {
      return of(mockedCharacter);
    });
  });
  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('verify data returned from resolver', () => {
    const entityId = '1';
    spyOn(route.paramMap, 'get').and.returnValue(entityId);
    resolver.resolve(route, null).subscribe( (res) => {
      expect(res).toBe(mockedCharacter);
    });
    expect(swapiService.getCharacterDetails).toHaveBeenCalledWith(entityId);
  })
});
