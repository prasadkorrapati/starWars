import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { EntityRedirectComponent } from './components/entity-redirect/entity-redirect.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { StarWarComponent } from './components/star-war/star-war.component';

@NgModule({
  declarations: [
    EntityCardComponent,
    EntityRedirectComponent,
    StarWarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AngularResizedEventModule
  ],
  exports: [
    EntityCardComponent,
    EntityRedirectComponent
  ]
})
export class CoreModule { }
