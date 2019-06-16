import { NameUrl } from './name-url.module';

export class Pokemon {
    abilities: string[]
    base_experience: number;
    height: number;
    id: number;
    name: string;
    order: number;
    sprites: Sprites;
    stats: Stats[];
    types: string[];
    weight: number;
    color: string;
    evolution_chain_url: string;
    description: string;
    generation: string;
    has_gender_differences: boolean;
    is_baby: boolean;
    shape: string;
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
