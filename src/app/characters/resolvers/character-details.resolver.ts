import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Character } from 'src/app/core/types';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsResolver implements Resolve<Character> {
  constructor(private swapiService: SwapiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> {
    const id = route.paramMap.get('id');
    return this.swapiService.getCharacterDetails(id);
  }
}
