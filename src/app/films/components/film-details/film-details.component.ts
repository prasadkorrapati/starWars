import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResizedEvent } from 'angular-resize-event';
import { Entity } from 'src/app/core/entity';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  public filmDetails: any;
  public entityType = Entity.Film;
  public entityId: string;
  @ViewChild('image') imageElement: ElementRef | undefined;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.filmDetails = this.activatedRoute.snapshot.data['filmDetails'];
  }

  onResized(event: ResizedEvent) {
    if(this.imageElement) {
      this.imageElement.nativeElement.height = this.imageElement.nativeElement.width;
    }
  }

  ngOnInit(): void {
    this.entityId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
