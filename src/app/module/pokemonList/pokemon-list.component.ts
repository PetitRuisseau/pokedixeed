import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from 'src/app/core/providers/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  public pokemonList: Pokemon[];
  public loading = {
    isLoading: true,
    totalCount: 0,
    count: 0
  }
  constructor(
    private pokemonService: PokemonService,
  ) {
    this.loadAllPokemon()
  }

  loadAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(
      response => {
        this.pokemonList = []
        this.loading.totalCount = response.pokemon_entries.length
        response.pokemon_entries.forEach(pokemonPokedex => {
          this.pokemonService.getOnePokemon(pokemonPokedex.entry_number).subscribe(
            response => {
              this.pokemonList.push(response)
              this.loading.count += 1
              if (this.loading.count == this.loading.totalCount) {
                this.loading.isLoading = false
              }
            }
          )
        });
      }
    )
  }
}
