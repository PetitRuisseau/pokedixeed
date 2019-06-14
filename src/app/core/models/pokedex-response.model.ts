import { NameUrl } from './name-url.module';

export class PokedexResponse {
    descriptions: {description:string,language: NameUrl}[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: {language: NameUrl, name: string}[];
    pokemon_entries: {entry_number: 1, pokemon_species: NameUrl}[];
    region: any
    version_groups: any[]
}