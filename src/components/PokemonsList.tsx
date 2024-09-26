import { FC } from "react"
import { AllPokemosQuery, Pokemon } from "../graphql";
import PokemonSingleCard from "./PokemonSingleCard";

interface PokemonsListProps {
    pokemons: AllPokemosQuery | undefined
}

const PokemonsList: FC<PokemonsListProps> = ({ pokemons }) => {
    console.log(pokemons)
    const pokemonsList = pokemons?.pokemons?.filter(
        (pokemon) => pokemon !== null && pokemon !== undefined
    )
    if (!pokemons) return <div>Loading...</div>
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                pokemonsList?.map((pokemon: Pokemon) =>
                (
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