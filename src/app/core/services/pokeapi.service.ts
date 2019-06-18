import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokeapiConfig } from '../config/pokeapi.config';
import {
    PokemonResponse,
    PokemonSpeciesResponse,
    AnyListResponse,
    PokedexResponse,
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
    
    private getPokeapi<T>(endpoint: string, name?: string): Observable<T> {
        if (name)
            return this.httpClient.get<T>(`${PokeapiConfig.url}${endpoint}${name}`, this.header);
        return this.httpClient.get<T>(`${PokeapiConfig.url}${endpoint}?offset=0&limit=1000`, this.header);
    }

    public getPokedex(): Observable<PokedexResponse> {
        return this.getPokeapi<PokedexResponse>(PokeapiConfig.endpoints.pokedex)
    }

    public getAllPokemon(): Observable<AnyListResponse> {
        return this.getPokeapi<AnyListResponse>(PokeapiConfig.endpoints.pokemon)
    }

    public getOnePokemon(name: string): Observable<PokemonResponse> {
        return this.getPokeapi<PokemonResponse>(PokeapiConfig.endpoints.pokemon, name)
    }

    public getOnePokemonSpecie(name: string): Observable<PokemonSpeciesResponse> {
        return this.getPokeapi<PokemonSpeciesResponse>(PokeapiConfig.endpoints.pokemonSpecies, name)
    }

    public getAllAbilities(): Observable<AnyListResponse> {
        return this.getPokeapi<AnyListResponse>(PokeapiConfig.endpoints.pokemon)
    }

    public getOneAbility(name: string): Observable<any> {
        return this.getPokeapi<any>(PokeapiConfig.endpoints.pokemonSpecies, name)
    }

    public getAllTypes(): Observable<AnyListResponse> {
        return this.getPokeapi<AnyListResponse>(PokeapiConfig.endpoints.pokemon)
    }

    public getOneType(name: string): Observable<any> {
        return this.getPokeapi<any>(PokeapiConfig.endpoints.pokemonSpecies, name)
    }

    public getAllGenerations(): Observable<AnyListResponse> {
        return this.getPokeapi<AnyListResponse>(PokeapiConfig.endpoints.pokemon)
    }

    public getOneGeneration(name: string): Observable<any> {
        return this.getPokeapi<any>(PokeapiConfig.endpoints.pokemonSpecies, name)
    }

    public getAllColors(): Observable<AnyListResponse> {
        return this.getPokeapi<AnyListResponse>(PokeapiConfig.endpoints.pokemon)
    }

    public getOnecolor(name: string): Observable<any> {
        return this.getPokeapi<any>(PokeapiConfig.endpoints.pokemonSpecies, name)
    }
}