import { NameUrl } from './name-url.module';

export class PokemonSpeciesResponse {
    base_happiness: number;
    capture_rate: number;
    color: NameUrl;
    egg_groups: NameUrl[];
    evolution_chain: {url: string};
    evolves_from_species: NameUrl;
    flavor_text_entries: {flavor_text: string, language: NameUrl, version: NameUrl}[];
    form_descriptions: any[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: {genus: string, language: NameUrl}[];
    generation: NameUrl;
    growth_rate: NameUrl;
    habitat: NameUrl;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    name: string;
    names: {language: NameUrl, name: string}[];
    order: number;
    pal_park_encounters: {area: NameUrl, base_score: number, rate: number}[];
    pokedex_numbers: {entry_number: number, pokedex: NameUrl}[];
    shape: NameUrl;
    varieties: {is_default: boolean, pokemon: NameUrl}[];
}