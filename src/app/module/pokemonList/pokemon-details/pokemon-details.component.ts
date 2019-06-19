import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonService } from 'src/app/core/services';
import { PokemonDetails } from 'src/app/core/models/pokemon-details.model';

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsDialog {
  public pokemonDetails: PokemonDetails
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data,
    private pokemonService: PokemonService,
  ) {
    this.loadPokemonDetails(data.pokemon)
  }

  loadPokemonDetails(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe(
      response => {
        this.pokemonDetails = response
        console.log(response);
        
      }
    )
  }
}
