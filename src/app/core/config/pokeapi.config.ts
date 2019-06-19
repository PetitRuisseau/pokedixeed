export const PokeapiConfig = {
    url: 'https://pokeapi.co/api/v2/',
    endpoints: {
        pokedex: 'pokedex/1/',
        pokemon: 'pokemon/',
        pokemonSpecies: 'pokemon-species/',
        ability: 'ability/',
        type: 'type/',
        generation: 'generation/',
        color: 'pokemon-color/'
    },
    spriteUrl: {
        back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/",
        back_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/",
        back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/",
        back_shiny_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/",
        front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
        front_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/",
        front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/",
        front_shiny_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/",
    },
    spriteUrlEnd: ".png"
}