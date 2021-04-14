import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { EntityRedirectComponent } from './components/entity-redirect/entity-redirect.component';
import { StarWarComponent } from './components/star-war/star-war.component';
import { SwapiService } from './services/swapi.service';
import { EntityImageComponent } from './components/entity-image/entity-image.component';

@NgModule({
  declarations: [
    EntityCardComponent,
    EntityRedirectComponent,
    StarWarComponent,
    EntityImageComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    EntityCardComponent,
    EntityRedirectComponent,
    EntityImageComponent
  ],
  providers: [
    SwapiService
  ]
})
export class CoreModule { }
