import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Entity } from 'src/app/core/entity';
import { Planet } from 'src/app/core/types';

import { PlanetDetailsComponent } from './planet-details.component';
import * as mockedPlanets from './../../../../assets/mocks/planetDetails.json';
describe('PlanetDetailsComponent', () => {
  let component: PlanetDetailsComponent;
  let fixture: ComponentFixture<PlanetDetailsComponent>;
  const mockedPlanetDetails : Planet = mockedPlanets.default;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
      ],
      declarations: [ PlanetDetailsComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              planetDetails: mockedPlanetDetails
            },
            paramMap: {
              get: () => "1"
            }
          }
        }
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify component conext data was set properly', () => {
      expect(component.imgUrl).toBe('assets/images/planets/1.jpg');
      expect(component.entityType).toBe(Entity.Planet);
      expect(component.entityId).toBe('1');
      expect(component.planetDetails).toBe(mockedPlanetDetails);
  });
});
