import { NameUrl } from './name-url.module';

export class PokemonResponse {
    abilities: Abilities[]
    base_experience: number;
    forms: NameUrl[]
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    name: string;
    order: number;
    species: NameUrl;
    sprites: Sprites;
    stats: Stats[];
    types: Types[];
    weight: number;
}

class Abilities {
    ability: NameUrl;
    is_hidden: boolean;
    slot: number;
}

class Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

class Stats {
    base_stat: number;
    effort: number;
    stat: NameUrl;
}

class Types {
    slot: number;
    type: NameUrl;
}
