import { Injectable } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { PokemonSpeciesResponse, PokemonResponse, PokemonEntries } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PokemonService {
    private allPokemonList: PokemonEntries[];
    private pokemonDetailsList = []
    constructor(
        private pokeapiService: PokeapiService,
        private httpClient: HttpClient,
    ) {}

    public getMockPokemon() {
        return this.httpClient.get<Pokemon[]>('assets/pokemon.mock.json',{
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        })
    }

    public getAllPokemon(): Observable<PokemonEntries[]> {
        if (this.allPokemonList) {
            return of(this.allPokemonList)
        }
        return this.pokeapiService.getPokedex().pipe(map(
            pokedex => {
                this.allPokemonList = pokedex.pokemon_entries;
                return pokedex.pokemon_entries
            }
        ))
    }

    public getPokemonDetails(name: string): Observable<any> {
        if (this.pokemonDetailsList[name]) {
            return of(this.pokemonDetailsList[name])
        }
        return forkJoin(
            this.pokeapiService.getOnePokemon(name), 
            this.pokeapiService.getOnePokemonSpecie(name)
        ).pipe(map(([pokemonDetailsResponse, pokemonSpeciesResponse]) => {
            this.pokemonDetailsList[name] = this.parsePokemon(name, pokemonDetailsResponse, pokemonSpeciesResponse);
            return this.parsePokemon(name, pokemonDetailsResponse, pokemonSpeciesResponse);
        }));
    }

    private parsePokemon(name: string, pokemonDetailsResponse: PokemonResponse, pokemonSpeciesResponse: PokemonSpeciesResponse) {
        return {
            name: name,
            pokemon: pokemonDetailsResponse,
            species: pokemonSpeciesResponse,
        }
    }
}