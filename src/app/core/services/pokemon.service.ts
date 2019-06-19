import { Injectable } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonSpeciesResponse, PokemonResponse, PokemonEntries } from '../models';
import { PokemonDetails } from '../models/pokemon-details.model';

@Injectable()
export class PokemonService {
    private allPokemonList: PokemonEntries[];
    private pokemonDetailsList = {}
    constructor(
        private pokeapiService: PokeapiService,
    ) {}

    private parsePokemon(name: string, pokemonResponse: PokemonResponse, pokemonSpeciesResponse: PokemonSpeciesResponse): PokemonDetails {
        return {
            name: name,
            pokemon: pokemonResponse,
            species: pokemonSpeciesResponse,
        }
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

    public getPokemonDetails(name: string): Observable<PokemonDetails> {
        if (this.pokemonDetailsList[name]) {
            return of(this.pokemonDetailsList[name])
        }
        return forkJoin(
            this.pokeapiService.getOnePokemon(name), 
            this.pokeapiService.getOnePokemonSpecie(name)
        ).pipe(map(([pokemonResponse, pokemonSpeciesResponse]) => {
            this.pokemonDetailsList[name] = this.parsePokemon(name, pokemonResponse, pokemonSpeciesResponse);
            return this.parsePokemon(name, pokemonResponse, pokemonSpeciesResponse);
        }));
    }

    public getPokemonSpriteUrl(id: number): string {
        return this.pokeapiService.getPokemonSpriteUrl(id)
    }
}