import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entity } from 'src/app/core/entity';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Film, SwapiResponse } from 'src/app/core/types';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit, OnDestroy {

  constructor(private swapiService: SwapiService) { }

  public films: Film[] = [];
  public entityType = Entity.Film;
  public subscription : Subscription;
  ngOnInit(): void {
    this.subscription = this.swapiService.getStarWars('films').subscribe( (res: SwapiResponse)=> {
      this.films = res.results;      
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
