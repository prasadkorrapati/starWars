import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { SwapiResponse } from 'src/app/core/types';
import * as mockedPlanets from './../../../../assets/mocks/planets.json';

import { PlanetsComponent } from './planets.component';

describe('PlanetsComponent', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;
  let swapiService: SwapiService;
  const mockedPlanetResponse: SwapiResponse = mockedPlanets.default;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      declarations: [ PlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    swapiService = TestBed.inject(SwapiService);
  });

  beforeEach( () => {
    spyOn(swapiService, 'getStarWars').and.callFake( () => of(mockedPlanetResponse));
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify the planets on the component conect once load from the server', () => {
    component.ngOnInit();
    expect(component.planets.length).toBe(mockedPlanetResponse.results.length);
    expect(component.entityType).toBe(Entity.Planet);
  });

  it('verify unsubscribing of the observables', () => {
    spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['subscription'].unsubscribe).toHaveBeenCalledTimes(1);
  });
});
