import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-entity-image',
  templateUrl: './entity-image.component.html',
  styleUrls: ['./entity-image.component.scss']
})
export class EntityImageComponent{
  @Input() imgUrl: string;

}
