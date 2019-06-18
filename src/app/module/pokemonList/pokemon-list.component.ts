import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Component } from '@angular/core';
import { PokemonEntries } from 'src/app/core/models';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  public isLoading: boolean = true;
  public pokemonList: PokemonEntries[];
  public filter: {
    pokemonName: string,
    type: string,
    ability: string,
    color: string,
    generation: string,
  }
  public selectList: {
    types: string[],
    abilities: string[],
    colors: string[],
    generations: string[],
  }
  
  public key: string = 'entry_number';
  public reverse: boolean = true;
  public p: number = 1;
  
  constructor(
    private pokemonService: PokemonService,
  ) {
    this.selectList = {
      types: [],
      abilities: [],
      colors: [],
      generations: [],
    }
    this.filter = {
      pokemonName: '',
      type: '',
      ability: '',
      color: '',
      generation: '',
    }
    this.loadPokemonList()
  }

  private loadPokemonList() {
    this.pokemonService.getAllPokemon().subscribe(
      response => {
        this.pokemonList = response
        this.isLoading = false;
      }
    )
  }

  public sort(key: string): void {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
