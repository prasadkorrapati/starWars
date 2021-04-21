import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Entity } from 'src/app/core/entity';
import { Character } from 'src/app/core/types';
import * as mockedCharDetails from './../../../../assets/mocks/characterDetails.json';
import { CharacterDetailsComponent } from './character-details.component';

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;
  const mockedCharDetailsResponse: Character = mockedCharDetails.default;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [ CharacterDetailsComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              characterDetails: mockedCharDetailsResponse
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
    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify component conext data was set properly', () => {
    expect(component.imgUrl).toBe('assets/images/people/1.jpg');
    expect(component.entityType).toBe(Entity.Character);
    expect(component.entityId).toBe('1');
    expect(component.characterDetails).toBe(mockedCharDetailsResponse);
})
});
