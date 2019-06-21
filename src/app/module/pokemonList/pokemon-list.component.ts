import { Component, ChangeDetectorRef } from '@angular/core';
import { PokemonEntries, NameUrl } from 'src/app/core/models';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  AbilitiesService,
  GenerationsService,
  TypesService,
  ColorsService,
  PokemonService,
  InventoryService
} from 'src/app/core/services';
import { forkJoin, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailsDialog } from './pokemon-details/pokemon-details.component';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
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

  public mode: string;
  
  public isLoading: boolean = true;
  public sideNavOpened: boolean = false;
  public key: string = 'entry_number';
  public reverse: boolean = true;
  public p: number = 1;
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  
  constructor(
    public dialog: MatDialog,
    private pokemonService: PokemonService,
    private abilitiesService: AbilitiesService,
    private generationsService: GenerationsService,
    private typesService: TypesService,
    private colorsService: ColorsService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private inventoryService: InventoryService,
  ) {}

  ngOnInit() {
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
    this.mode = 'pokeball'
    this.loadPokemonList()
    this.loadSelectList()
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private loadPokemonList() {
    this.pokemonService.getAllPokemon().subscribe(
      response => {
        this.pokemonList = response
        this.isLoading = false
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
  
  private openPokemonDetailsDialog(name: string) {
    this.dialog.open(PokemonDetailsDialog, {
      maxWidth: '100vw',
      data: {
        pokemon: name
      }
    });
  }

  private captureOnePokemon(id: number) {
    this.inventoryService.savePokemon(id)
  }

  public clickOnPokemon(e: MouseEvent, name: string, id: number) {
    if (this.mode == 'pokeball') {
      this.captureOnePokemon(id)
      this.pokeballAnimation(e)
    } else {
      this.openPokemonDetailsDialog(name)
    }
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

  public getPokemonSpriteUrl(id: number): string {
    return this.pokemonService.getPokemonSpriteUrl(id)
  }

  private pokeballAnimation(e: MouseEvent) {
    let pokeball = document.createElement('div');
    pokeball.className = 'pokeball-animation';
    pokeball.style.top = e.clientY + 'px'
    pokeball.style.left = e.clientX + 'px'
    document.body.appendChild(pokeball).addEventListener("animationend", () => {
      document.body.removeChild(pokeball)
    });
  }
}
