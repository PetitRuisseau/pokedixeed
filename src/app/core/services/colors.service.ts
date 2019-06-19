import { Injectable } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnyListResponse } from '../models';

@Injectable()
export class ColorsService {
    private allColorsList: AnyListResponse;
    private pokemonPerColor = {}
    constructor(
        private pokeapiService: PokeapiService
    ) {}

    public getAllColors(): Observable<AnyListResponse> {
        if (this.allColorsList) {
            return of(this.allColorsList)
        }
        return this.pokeapiService.getAllColors().pipe(map(
            colors => {
                this.allColorsList = colors;
                return colors
            }
        ))
    }

    getPokemonListFromOneColor(name: string) {
        if (this.pokemonPerColor[name]) {
            return of(this.pokemonPerColor[name])
        }
        return this.pokeapiService.getOnecolor(name).pipe(map(
            response => {
                let pokemonList = []
                response.pokemon_species.forEach(pokemon => {
                    pokemonList.push(pokemon.name)
                })
                this.pokemonPerColor[name] = pokemonList
                return pokemonList
            }
        ))
    }
}