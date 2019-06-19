import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  PokeapiService,
  PokemonService,
  AbilitiesService,
  GenerationsService,
  TypesService,
  ColorsService
} from './core/services';
import {
  PokemonListComponent,
  FooterComponent,
  HeaderComponent,
} from './module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FiltersPipe, OrderByPipe, FilterArrayPipe } from './shared/pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    FiltersPipe,
    FilterArrayPipe,
    OrderByPipe,
    PokemonListComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [
    PokeapiService,
    PokemonService,
    AbilitiesService,
    GenerationsService,
    TypesService,
    ColorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
