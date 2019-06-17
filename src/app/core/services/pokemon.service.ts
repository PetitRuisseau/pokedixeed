import { Injectable } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { PokemonSpeciesResponse, PokemonResponse, PokedexResponse } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PokemonService {
    public pokedexesponse: PokedexResponse;
    constructor(
        private pokeapiService: PokeapiService,
        private httpClient: HttpClient,
    ) {}

    public getMockPokemon() {
        return this.httpClient.get<Pokemon[]>('assets/pokemon.mock.json',{
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        })
    }

    public getAllPokemon(): Observable<PokedexResponse> {
        return this.pokeapiService.getPokedexList().pipe(map(
            pokedexResponse => {
                this.pokedexesponse = pokedexResponse;
                return pokedexResponse
            }
        ))
    }

    public getOnePokemon(id: number): Observable<Pokemon> {
        return forkJoin(
            this.pokeapiService.getPokemonDetails(id), 
            this.pokeapiService.getPokemonSpecie(id)
        ).pipe(map(([pokemonDetailsResponse, pokemonSpeciesResponse]) => {
            return this.parsePokemon(pokemonDetailsResponse, pokemonSpeciesResponse);
        }));
    }

    private parsePokemon(pokemonDetailsResponse: PokemonResponse, pokemonSpeciesResponse: PokemonSpeciesResponse) {
        let pokemon: Pokemon = {
            abilities: [],
            base_experience: pokemonDetailsResponse.base_experience,
            height: pokemonDetailsResponse.height,
            id: pokemonDetailsResponse.id,
            name: pokemonDetailsResponse.name,
            order: pokemonDetailsResponse.order,
            sprites: pokemonDetailsResponse.sprites,
            stats: pokemonDetailsResponse.stats,
            types: [],
            weight: pokemonDetailsResponse.weight,
            color: pokemonSpeciesResponse.color.name,
            evolution_chain_url: pokemonSpeciesResponse.evolution_chain.url,
            description: '',
            generation: pokemonSpeciesResponse.generation.name,
            has_gender_differences: pokemonSpeciesResponse.has_gender_differences,
            is_baby: pokemonSpeciesResponse.is_baby,
            shape: pokemonSpeciesResponse.shape.name,
        };
        pokemonDetailsResponse.abilities.forEach(abilitie => {
            pokemon.abilities.push(abilitie.ability.name);
        });
        pokemonDetailsResponse.types.forEach(type => {
            pokemon.types.push(type.type.name);
        });
        pokemonSpeciesResponse.flavor_text_entries.forEach(flavor_text_entri => {
            if (flavor_text_entri.language.name == 'en') {
                pokemon.description = flavor_text_entri.flavor_text;
            }
        });
        return pokemon;
    }
}