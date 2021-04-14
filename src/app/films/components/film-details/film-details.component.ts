import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public imgUrl:string;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.filmDetails = this.activatedRoute.snapshot.data['filmDetails'];
  }

  ngOnInit(): void {
    this.entityId = this.activatedRoute.snapshot.paramMap.get('id');
    this.imgUrl = `assets/images/${this.entityType}/${this.entityId}.jpg`;
  }

}
