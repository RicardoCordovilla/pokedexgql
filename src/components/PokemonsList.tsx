import { FC } from "react"
import { AllPokemosQuery, Pokemon } from "../graphql";
import PokemonSingleCard from "./PokemonSingleCard";

interface PokemonsListProps {
    pokemons: AllPokemosQuery | undefined
}

const PokemonsList: FC<PokemonsListProps> = ({ pokemons }) => {
    const pokemonsList = pokemons?.pokemons
    if(!pokemons) return <div>Loading...</div>
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                pokemonsList?.map((pokemon: Pokemon) => (
                    <PokemonSingleCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ))
            }
        </div>
    )
}

export default PokemonsList