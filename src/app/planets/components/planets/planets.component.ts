import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Planet } from 'src/app/core/types';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {

  constructor(private swapiService: SwapiService) { }
  public planets: Planet[] = [];
  public entityType: String = Entity.Planet;
  public subscription : Subscription;
  ngOnInit(): void {
    this.subscription = this.swapiService.getStarWars('planets').subscribe(res => this.planets = res.results);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
