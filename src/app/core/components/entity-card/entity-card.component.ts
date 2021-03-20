import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Character, Film, Planet } from '../../types';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent implements OnInit {

  @ViewChild('image') imageElement: ElementRef | undefined;
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

  onResized(event: ResizedEvent) {
    if(this.imageElement) {
      this.imageElement.nativeElement.height = this.imageElement.nativeElement.width;
    }
  }

}
