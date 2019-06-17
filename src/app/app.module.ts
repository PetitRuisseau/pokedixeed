import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeapiService } from './core/providers';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './core/providers/pokemon.service';
import { PokemonListComponent } from './module/pokemonList/pokemon-list.component';
import { FiltersPipe, OrderByPipe } from './shared/pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FiltersPipe,
    OrderByPipe,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [
    PokeapiService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
