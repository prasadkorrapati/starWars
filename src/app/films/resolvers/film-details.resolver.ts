import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Film } from 'src/app/core/types';

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsResolver implements Resolve<Film> {
  constructor(private swapiService: SwapiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film> {
    const filmId = route.paramMap.get('id');
    return this.swapiService.getFilmDetails(filmId);
  }
}
