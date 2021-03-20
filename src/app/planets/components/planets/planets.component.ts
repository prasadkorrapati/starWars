import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Planet } from 'src/app/core/types';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private swapiService: SwapiService) { }
  public planets: Planet[] = [];
  public entityType: String = Entity.Planet;
  ngOnInit(): void {
    this.swapiService.getStarWars('planets').subscribe(res => this.planets = res.results);
  }

}
