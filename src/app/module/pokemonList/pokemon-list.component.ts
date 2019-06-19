import { Component } from '@angular/core';
import { PokemonEntries, NameUrl } from 'src/app/core/models';
import {
  AbilitiesService,
  GenerationsService,
  TypesService,
  ColorsService,
  PokemonService
} from 'src/app/core/services';
import { forkJoin, of } from 'rxjs';

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
    types: NameUrl[],
    abilities: NameUrl[],
    colors: NameUrl[],
    generations: NameUrl[],
  }
  public filteredPokemonListForFilter: {
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
    private abilitiesService: AbilitiesService,
    private generationsService: GenerationsService,
    private typesService: TypesService,
    private colorsService: ColorsService,
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
    this.filteredPokemonListForFilter = {
      types: [],
      abilities: [],
      colors: [],
      generations: [],
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
    forkJoin(
      this.abilitiesService.getAllAbilities(),
      this.generationsService.getAllGenerations(),
      this.typesService.getAllTypes(),
      this.colorsService.getAllColors(),
    ).subscribe(
      ([abilitiesResponse, generationsResponse, typesResponse, colorsResponse]) => {
        this.selectList.abilities = abilitiesResponse.results
        this.selectList.generations = generationsResponse.results
        this.selectList.types = typesResponse.results
        this.selectList.colors = colorsResponse.results
      }
    )
  }

  public abilityChange(filter) {
    if (!this.filter[filter]) {
      this.filteredPokemonListForFilter[filter] = []
      return
    }
    let request;
    switch (filter) {
      case 'ability':
        request = this.abilitiesService.getPokemonListFromOneAbility(this.filter.ability)
        break;
      case 'type':
        request = this.typesService.getPokemonListFromOneType(this.filter.type)
        break;
      case 'generation':
        request = this.generationsService.getPokemonListFromOneGeneration(this.filter.generation)
        break;
      case 'color':
        request = this.colorsService.getPokemonListFromOneColor(this.filter.color)
        break;
    
      default:
        request = of(null)
        break;
    }
    request.subscribe(
      response => {
        this.filteredPokemonListForFilter[filter] = response
      }
    )
  }

  public sort(key: string): void {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
