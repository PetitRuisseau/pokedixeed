import { Injectable } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnyListResponse } from '../models';

@Injectable()
export class AbilitiesService {
    private allAbilitiesList: AnyListResponse;
    private pokemonPerAbility = {}
    constructor(
        private pokeapiService: PokeapiService
    ) {}

    public getAllAbilities(): Observable<AnyListResponse> {
        if (this.allAbilitiesList) {
            return of(this.allAbilitiesList)
        }
        return this.pokeapiService.getAllAbilities().pipe(map(
            abilities => {
                this.allAbilitiesList = abilities;
                return abilities
            }
        ))
    }

    getPokemonListFromOneAbility(name: string) {
        if (this.pokemonPerAbility[name]) {
            return of(this.pokemonPerAbility[name])
        }
        return this.pokeapiService.getOneAbility(name).pipe(map(
            response => {
                let pokemonList = []
                response.pokemon.forEach(pokemon => {
                    pokemonList.push(pokemon.pokemon.name)
                })
                this.pokemonPerAbility[name] = pokemonList
                return pokemonList
            }
        ))
    }
}