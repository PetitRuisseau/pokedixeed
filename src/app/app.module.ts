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
  PokemonDetailsDialog,
} from './module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FiltersPipe, OrderByPipe, FilterArrayPipe } from './shared/pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingComponent } from './shared/component/loading/loading.component';

@NgModule({
  entryComponents: [PokemonDetailsDialog],
  declarations: [
    AppComponent,
    FiltersPipe,
    FilterArrayPipe,
    OrderByPipe,
    PokemonListComponent,
    PokemonDetailsDialog,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
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
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
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
