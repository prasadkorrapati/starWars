import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entity } from 'src/app/core/entity';
import { Planet } from 'src/app/core/types';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  planetDetails: Planet;
  public entityType = Entity.Planet;
  public entityId: string;
  public imgUrl: string;
  
  constructor(private activatedRoute: ActivatedRoute) { 
    this.planetDetails = this.activatedRoute.snapshot.data['planetDetails'];
  }

  ngOnInit(): void {
    this.entityId = this.activatedRoute.snapshot.paramMap.get('id');
    this.imgUrl = `assets/images/${this.entityType}/${this.entityId}.jpg`;
  }

}
