import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeapiService } from './core/providers';
import { HttpClientModule } from '@angular/common/http';
import { FiltersPipe } from './shared/pipes/filters.pipe';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './core/providers/pokemon.service';
import { PokemonListComponent } from './module/pokemonList/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersPipe,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    PokeapiService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
