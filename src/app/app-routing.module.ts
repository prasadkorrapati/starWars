import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { StarWarComponent } from './core/components/star-war/star-war.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'films',
        loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)
      },
      {
        path: 'characters',
        loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: 'planets',
        loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule)
      },
      {
        path: 'starWars',
        component: StarWarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
