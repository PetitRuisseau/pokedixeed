import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokemonApiConfig } from '../config/pokemon-api.config';
import {
    PokedexResponse,
    PokemonResponse,
    PokemonSpeciesResponse,
} from '../models';

@Injectable()
export class PokemonApiService {
    private readonly header = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: new HttpParams()
    }

    constructor(
        private httpClient: HttpClient,
    ) {}

    public getPokedexList(): Observable<PokedexResponse> {
        return this.httpClient.get<PokedexResponse>(
            `${PokemonApiConfig.url}${PokemonApiConfig.endpoints.pokedex}`, 
            this.header
        )
    }

    public getPokemonDetails(id): Observable<PokemonResponse> {
        return this.httpClient.get<PokemonResponse>(
            `${PokemonApiConfig.url}${PokemonApiConfig.endpoints.pokemon}${id}`, 
            this.header
        )
    }

    public getPokemonSpecie(id): Observable<PokemonSpeciesResponse> {
        return this.httpClient.get<PokemonSpeciesResponse>(
            `${PokemonApiConfig.url}${PokemonApiConfig.endpoints.pokemonSpecies}${id}`, 
            this.header
        )
    }
}