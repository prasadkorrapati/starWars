import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Planet } from 'src/app/core/types';

@Injectable({
  providedIn: 'root'
})
export class PlanetDetailsResolver implements Resolve<Planet> {
  constructor(private swapiService: SwapiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Planet> {
    const id = route.paramMap.get('id');
    return this.swapiService.getPlanetDetails(id);
  }
}
