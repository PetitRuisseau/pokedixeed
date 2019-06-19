import { Injectable } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnyListResponse } from '../models';

@Injectable()
export class GenerationsService {
    private allGenerationsList: AnyListResponse;
    private pokemonPerGeneration = {}
    constructor(
        private pokeapiService: PokeapiService
    ) {}

    public getAllGenerations(): Observable<AnyListResponse> {
        if (this.allGenerationsList) {
            return of(this.allGenerationsList)
        }
        return this.pokeapiService.getAllGenerations().pipe(map(
            generations => {
                this.allGenerationsList = generations;
                return generations
            }
        ))
    }

    getPokemonListFromOneGeneration(name: string) {
        if (this.pokemonPerGeneration[name]) {
            return of(this.pokemonPerGeneration[name])
        }
        return this.pokeapiService.getOneGeneration(name).pipe(map(
            response => {
                let pokemonList = []
                response.pokemon_species.forEach(pokemon => {
                    pokemonList.push(pokemon.name)
                })
                this.pokemonPerGeneration[name] = pokemonList
                return pokemonList
            }
        ))
    }
}