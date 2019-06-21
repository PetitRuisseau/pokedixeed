import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './module/pokemonList/pokemon-list.component';
import { InventoryComponent } from './module';

const routes: Routes = [
  { path: 'pokemon-list', pathMatch: 'full', component: PokemonListComponent },
  { path: 'inventory', pathMatch: 'full', component: InventoryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pokemon-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
