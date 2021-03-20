import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterDetailsResolver } from './resolvers/character-details.resolver';



const characterRoutes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'details/:id',
    component: CharacterDetailsComponent,
    resolve: {
      characterDetails: CharacterDetailsResolver
    }
  }
];

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(characterRoutes),
    CoreModule
  ]
})
export class CharactersModule { }
