import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EntityRedirectComponent } from './entity-redirect.component';
import * as characterDetails from './../../../../assets/mocks/characterDetails.json';
import { SimpleChange } from '@angular/core';
import { of } from 'rxjs';
describe('EntityRedirectComponent', () => {
  let component: EntityRedirectComponent;
  let fixture: ComponentFixture<EntityRedirectComponent>;
  let httpMock: HttpTestingController;
  let mockedCharactedDetailsRes = characterDetails.default;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      declarations: [ EntityRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.getId()).toBe(null);
  });

  it('verify on input data change and url', () => {
    spyOn(component.http, 'get').and.returnValue( of(mockedCharactedDetailsRes));
    const url = 'https://swapi.dev/api/people/1/';
    // There are various ways to test the ngOnChanges, following would the simplest ways to trigger onchange
    component.ngOnChanges({url: new SimpleChange(null, url, true)})
    component.urlToRedirect = 'characters/details/';
    component.url = url;
    fixture.detectChanges();
    expect(component.details).toBe(mockedCharactedDetailsRes);
    expect(component.getId()).toBe('characters/details/1');
  });
});
