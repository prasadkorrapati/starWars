import { Component, Input, OnInit } from '@angular/core';
import { Character, Film, Planet } from '../../types';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent implements OnInit {
  @Input() title ?: string;
  @Input() entity ?: Character | Film | Planet;
  @Input() entityType ?: String;
  @Input() route ?: string;
  constructor() { }

  ngOnInit(): void { }

  public getId(entity ?: Character | Film | Planet) {
    if(entity) {
      return entity.url.replace(/\D/g, '')
    } else {
      return null;
    }
  }

}
