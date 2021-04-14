import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Character } from 'src/app/core/types';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {

  public entityType = Entity.Character;
  constructor(private swapiService: SwapiService) {}
  public characters: Character[] = [];
  public subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.swapiService.getStarWars('people').subscribe(res => this.characters = res.results)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
