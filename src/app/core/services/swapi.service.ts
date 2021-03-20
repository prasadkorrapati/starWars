import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../entity';
import { Character, Film, Planet, SwapiResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  baseUrl: string = 'https://swapi.dev/api/';
  constructor(private http: HttpClient) { }

  getStarWars(resource: string): Observable<SwapiResponse> {
    return this.http.get<SwapiResponse>(`${this.baseUrl}${resource}/`);
  }

  getFilmDetails(id) : Observable<Film> {
    const url = `${this.baseUrl}${Entity.Film}/${id}/`;
    return this.http.get<Film>(url);
  }

  getCharacterDetails(id: any): Observable<Character> {
    const url = `${this.baseUrl}${Entity.Character}/${id}/`;
    return this.http.get<Character>(url);
  }

  getPlanetDetails(id: any): Observable<Planet> {
    const url = `${this.baseUrl}${Entity.Planet}/${id}/`;
    return this.http.get<Planet>(url);
  }
}
