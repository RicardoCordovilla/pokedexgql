export interface SinglePokemon {
    name: string;
    number: string;
    types: string[];
    image: string;
}


export interface Weight {
    minimum: string;
    maximum: string;
}

export interface Height {
    minimum: string;
    maximum: string;
}

export interface PokemonDetails {
    name: string;
    number: string;
    types: string[];
    height: Height;
    weight: Weight;
    weaknesses: string[];
}

