import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Character } from 'src/app/core/types';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public entityType = Entity.Character;
  constructor(private swapiService: SwapiService) {}
  public characters: Character[] = [];
  ngOnInit(): void {
    this.swapiService.getStarWars('people').subscribe(res => this.characters = res.results)
  }

}
