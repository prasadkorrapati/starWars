import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { SwapiResponse } from 'src/app/core/types';

import * as mockedCharacters from './../../../../assets/mocks/people.json';
import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let swapiService: SwapiService;
  const mockedPlanetResponse: SwapiResponse = mockedCharacters.default;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ CharactersComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    swapiService = TestBed.inject(SwapiService);
  });

  beforeEach( () => {
    spyOn(swapiService, 'getStarWars').and.callFake( () => {
      return of(mockedPlanetResponse);
    });
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify the planets on the component conect once load from the server', () => {
    component.ngOnInit();
    expect(component.characters.length).toBe(mockedPlanetResponse.results.length);
    expect(component.entityType).toBe(Entity.Character);

  });

  it('verify unsubscribing of the observables', () => {
    spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['subscription'].unsubscribe).toHaveBeenCalledTimes(1);
  });
});
