import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './components/planets/planets.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetDetailsResolver } from './resolvers/planet-details.resolver';

const planetRoutes: Routes = [
  { path: '', component:  PlanetsComponent},
  { path: 'details/:id',
    component: PlanetDetailsComponent,
    resolve: {
      planetDetails: PlanetDetailsResolver
    }
  }
];

@NgModule({
  declarations: [PlanetsComponent, PlanetDetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(planetRoutes)
  ]
})
export class PlanetsModule { }
