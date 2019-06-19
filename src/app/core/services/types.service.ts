import { Injectable } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnyListResponse } from '../models';

@Injectable()
export class TypesService {
    private allTypesList: AnyListResponse;
    private pokemonPerType = {}
    constructor(
        private pokeapiService: PokeapiService
    ) {}

    public getAllTypes(): Observable<AnyListResponse> {
        if (this.allTypesList) {
            return of(this.allTypesList)
        }
        return this.pokeapiService.getAllTypes().pipe(map(
            types => {
                this.allTypesList = types;
                return types
            }
        ))
    }

    getPokemonListFromOneType(name: string) {
        if (this.pokemonPerType[name]) {
            return of(this.pokemonPerType[name])
        }
        return this.pokeapiService.getOneType(name).pipe(map(
            response => {
                let pokemonList = []
                response.pokemon.forEach(pokemon => {
                    pokemonList.push(pokemon.pokemon.name)
                })
                this.pokemonPerType[name] = pokemonList
                return pokemonList
            }
        ))
    }
}