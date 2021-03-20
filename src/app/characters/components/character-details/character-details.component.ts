import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entity } from 'src/app/core/entity';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  characterDetails: any;
  public entityType = Entity.Character;
  public entityId: string;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.characterDetails = this.activatedRoute.snapshot.data['characterDetails'];
  }

  ngOnInit(): void {
    this.entityId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
