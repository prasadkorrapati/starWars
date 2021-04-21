import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Entity } from 'src/app/core/entity';
import { Film } from 'src/app/core/types';
import * as mockedFilms from './../../../../assets/mocks/films.json';
import { FilmDetailsComponent } from './film-details.component';

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;
  const mockedFilmResponse: Film = mockedFilms.default;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [ FilmDetailsComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              filmDetails: mockedFilmResponse
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
    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify component context was set properly', () => {
    expect(component.imgUrl).toBe('assets/images/films/1.jpg');
    expect(component.entityType).toBe(Entity.Film);
    expect(component.entityId).toBe('1');
    expect(component.filmDetails).toBe(mockedFilmResponse);
  })
});
