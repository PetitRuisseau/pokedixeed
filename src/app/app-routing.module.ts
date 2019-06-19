import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './module/pokemonList/pokemon-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PokemonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
