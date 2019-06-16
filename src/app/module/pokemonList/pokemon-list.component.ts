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
  public loading = {
    isLoading: true,
    totalCount: 0,
    count: 0
  }
  
  public key: string = 'id';
  public reverse: boolean = true;
  public p: number = 1;
  
  constructor(
    private pokemonService: PokemonService,
  ) {
    this.pokemonList = []
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
    this.loadAllPokemon()
  }

  private loadAllPokemon() {
    if (true) {
      this.pokemonService.getMockPokemon().subscribe(
        response => {
          this.pokemonList = response
          this.loading.totalCount = this.pokemonList.length
          this.pokemonList.forEach(pokemon => {
            this.generateSelectList(pokemon)
            this.loading.count += 1
            if (this.loading.count == this.loading.totalCount) {
              this.loading.isLoading = false
            }
          });
        }
      )
      return 
    }
    this.pokemonService.getAllPokemon().subscribe(
      response => {
        this.loading.totalCount = response.pokemon_entries.length
        response.pokemon_entries.forEach(pokemonPokedex => {
          this.pokemonService.getOnePokemon(pokemonPokedex.entry_number).subscribe(
            response => {
              this.pokemonList.push(response)
              this.generateSelectList(response)
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

  private generateSelectList(pokemon: Pokemon) {
    pokemon.types.forEach(type => {
      if (this.selectList.types.indexOf(type) < 0)
        this.selectList.types.push(type)
    });
    pokemon.abilities.forEach(ability => {
      if (this.selectList.abilities.indexOf(ability) < 0)
        this.selectList.abilities.push(ability)
    });
    if (this.selectList.generations.indexOf(pokemon.generation) < 0)
      this.selectList.generations.push(pokemon.generation)
    if (this.selectList.colors.indexOf(pokemon.color) < 0)
      this.selectList.colors.push(pokemon.color)
  }
  
  public sort(key: string): void {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
