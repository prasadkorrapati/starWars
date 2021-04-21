import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Planet } from 'src/app/core/types';

import { PlanetDetailsResolver } from './planet-details.resolver';

describe('PlanetDetailsResolver', () => {
  let resolver: PlanetDetailsResolver;
  let route: ActivatedRouteSnapshot;
  let swapiService: SwapiService;
  const mockedPlanetDetails : Planet = {
    climate: 'temperate',
    created: '2014-12-10T11:35:48.479000Z',
    diameter: '12500',
    edited: '2014-12-20T20:58:18.420000Z',
    films: [
      'http://swapi.dev/api/films/1/',
      'http://swapi.dev/api/films/6/'
    ],
    gravity: '1 standard',
    name: 'Alderaan',
    orbital_period: '364',
    population: '2000000000',
    residents: [
      'http://swapi.dev/api/people/5/',
      'http://swapi.dev/api/people/68/',
      'http://swapi.dev/api/people/81/'
    ],
    rotation_period: '24',
    surface_water: '40',
    terrain: 'grasslands, mountains',
    url: 'http://swapi.dev/api/planets/2/'
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    resolver = TestBed.inject(PlanetDetailsResolver);
    swapiService = TestBed.inject(SwapiService);
    route = new ActivatedRouteSnapshot();
  });

  beforeEach( () => {
    spyOn(swapiService, 'getPlanetDetails').and.callFake( () => {
      return of(mockedPlanetDetails);
    });
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('verify data returned from resolver', () => {
    const entityId = '1';
    spyOn(route.paramMap, 'get').and.returnValue(entityId);
    resolver.resolve(route, null).subscribe( (res) => {
      expect(res).toBe(mockedPlanetDetails);
    });
    expect(swapiService.getPlanetDetails).toHaveBeenCalledWith(entityId);
  })
});
