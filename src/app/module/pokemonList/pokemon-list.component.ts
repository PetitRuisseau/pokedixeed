import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Component } from '@angular/core';
import { PokemonEntries, NameUrl } from 'src/app/core/models';
import { AbilitiesService } from 'src/app/core/services';

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
    abilityPokemonList: []
    color: string,
    generation: string,
  }
  public selectList: {
    types: NameUrl[],
    abilities: NameUrl[],
    colors: NameUrl[],
    generations: NameUrl[],
  }
  
  public key: string = 'entry_number';
  public reverse: boolean = true;
  public p: number = 1;
  
  constructor(
    private pokemonService: PokemonService,
    private abilitiesService: AbilitiesService,
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
      abilityPokemonList: [],
      color: '',
      generation: '',
    }
    this.loadPokemonList()
    this.loadSelectList()
  }

  private loadPokemonList() {
    this.pokemonService.getAllPokemon().subscribe(
      response => {
        this.pokemonList = response
        this.isLoading = false;
      }
    )
  }

  private loadSelectList() {
    this.abilitiesService.getAllAbilities().subscribe(
      response => {
        this.selectList.abilities = response.results
      }
    )
  }

  abilityChange() {
     this.abilitiesService.getPokemonListFromOneAbility(this.filter.ability).subscribe(
      response => {
        this.filter.abilityPokemonList = response
      }
    )
  }

  public sort(key: string): void {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
