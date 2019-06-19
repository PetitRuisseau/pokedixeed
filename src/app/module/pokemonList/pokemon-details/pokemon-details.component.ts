import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<PokemonDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) 
    public data,
    private pokemonService: PokemonService,
  ) {
    this.loadPokemonDetails(data.pokemon)
  }
  
  close(): void {
    this.dialogRef.close();
  }

  loadPokemonDetails(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe(
      response => {
        this.pokemonDetails = response
        console.log(response);
        
      }
    )
  }

  getDescription(flavor_text_entries): string {
    for (let index = 0; index < flavor_text_entries.length; index++) {
      const flavor_text_entri = flavor_text_entries[index];
      if (flavor_text_entri.language.name == 'en') {
        return flavor_text_entri.flavor_text;
      }
    }
  }
}
