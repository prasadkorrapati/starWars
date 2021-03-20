import { TestBed } from '@angular/core/testing';

import { PlanetDetailsResolver } from './planet-details.resolver';

describe('PlanetDetailsResolver', () => {
  let resolver: PlanetDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlanetDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
