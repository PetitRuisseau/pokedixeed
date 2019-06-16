import { NameUrl } from './name-url.module';

export class PokedexResponse {
    descriptions: Descriptions[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: Names[];
    pokemon_entries: PokemonEntries[];
    region: any
    version_groups: any[]
}

class Descriptions {
    description: string;
    language: NameUrl;
}

class Names {
    name: string;
    language: NameUrl;
}

class PokemonEntries {
    entry_number: number;
    pokemon_species: NameUrl;
}