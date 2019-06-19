import { NameUrl } from './name-url.module';

export class AbilityResponse {
    effect_changes: EffectChanges[];
    effect_entries: EffectEntries[];
    flavor_text_entries: FlavorTextEntries;
    generation: NameUrl;
    id: number;
    is_main_series: boolean;
    name: string;
    names: Names;
    pokemon: Pokemon[];
}

class FlavorTextEntries {
    flavor_text: string;
    language: NameUrl;
    version: NameUrl;
}

class Names {
    name: string;
    language: NameUrl;
}

class EffectChanges {
    effect_entries: EffectEntries[];
    version_group: NameUrl;
}

class EffectEntries {
    effect: string;
    language: NameUrl;
    short_effect: string;
}

class Pokemon {
    is_hidden: boolean;
    pokemon: NameUrl;
    slot: number;
}
