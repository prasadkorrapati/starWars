import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './components/films/films.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { FilmDetailsResolver } from './resolvers/film-details.resolver';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

const filmsRoutes: Routes = [
  { path: '', component: FilmsComponent },
  {
    path: 'details/:id',
    component: FilmDetailsComponent,
    resolve: {
      filmDetails: FilmDetailsResolver
    }
  }

];

@NgModule({
  declarations: [FilmsComponent, FilmDetailsComponent],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(filmsRoutes)
  ]
})
export class FilmsModule { }
