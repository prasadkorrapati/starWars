import { TestBed } from '@angular/core/testing';

import { FilmDetailsResolver } from './film-details.resolver';

describe('FilmDetailsResolver', () => {
  let resolver: FilmDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FilmDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
