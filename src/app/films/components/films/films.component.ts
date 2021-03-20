import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Film, SwapiResponse } from 'src/app/core/types';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor(private swapiService: SwapiService) { }

  public films: Film[] = [];
  public entityType = Entity.Film;
  ngOnInit(): void {
    this.swapiService.getStarWars('films').subscribe( (res: SwapiResponse)=> {
      this.films = res.results;      
    });
  }

}
