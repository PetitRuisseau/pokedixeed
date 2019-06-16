import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokeapiConfig } from '../config/pokeapi.config';
import {
    PokedexResponse,
    PokemonResponse,
    PokemonSpeciesResponse,
} from '../models';

@Injectable()
export class PokeapiService {
    private readonly header = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: new HttpParams()
    }

    constructor(
        private httpClient: HttpClient,
    ) {}

    public getPokedexList(): Observable<PokedexResponse> {
        return this.httpClient.get<PokedexResponse>(
            `${PokeapiConfig.url}${PokeapiConfig.endpoints.pokedex}`, 
            this.header
        )
    }

    public getPokemonDetails(id: number): Observable<PokemonResponse> {
        return this.httpClient.get<PokemonResponse>(
            `${PokeapiConfig.url}${PokeapiConfig.endpoints.pokemon}${id}`, 
            this.header
        )
    }

    public getPokemonSpecie(id: number): Observable<PokemonSpeciesResponse> {
        return this.httpClient.get<PokemonSpeciesResponse>(
            `${PokeapiConfig.url}${PokeapiConfig.endpoints.pokemonSpecies}${id}`, 
            this.header
        )
    }
}