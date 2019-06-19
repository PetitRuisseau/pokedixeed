import { NameUrl } from './name-url.module';

export class PokemonSpeciesResponse {
    base_happiness: number;
    capture_rate: number;
    color: NameUrl;
    egg_groups: NameUrl[];
    evolution_chain: {url: string};
    evolves_from_species: NameUrl;
    flavor_text_entries: FlavorTextEntries[];
    form_descriptions: any[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genera[];
    generation: NameUrl;
    growth_rate: NameUrl;
    habitat: NameUrl;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    name: string;
    names: Names[];
    order: number;
    pal_park_encounters: PalParkEncounters[];
    pokedex_numbers: PokedexNumbers[];
    shape: NameUrl;
    varieties: Varieties[];
}

class FlavorTextEntries {
    flavor_text: string;
    language: NameUrl;
    version: NameUrl;
}

class Genera {
    genus: string;
    language: NameUrl;
}

class Names {
    name: string;
    language: NameUrl;
}

class PalParkEncounters {
    area: NameUrl;
    base_score: number;
    rate: number;
}

class PokedexNumbers {
    entry_number: number;
    pokedex: NameUrl;
}

class Varieties {
    is_default: boolean;
    pokemon: NameUrl;
}