import { useEffect, useState } from "react"
import Header from "../components/Header"
import Searcher from "../components/Searcher"
import { AllPokemosQuery, useAllPokemosQuery } from "../graphql"
import PokemonsList from "../components/PokemonsList"

const Home = () => {
    const { data, loading, error } = useAllPokemosQuery()
    const [search, setSearch] = useState('')
    const [pokemonsList, setPokemonsList] = useState<AllPokemosQuery>(data||{ pokemons: [] })

    useEffect(() => {
        console.log(search)
        if(data) {
            const filteredPokemons = data.pokemons?.filter(pokemon => {
                return pokemon?.name?.toLowerCase().includes(search.toLowerCase())
            })
            setPokemonsList({ pokemons: filteredPokemons })
        }
    }, [search, data])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error...</div>
    
    return (
        <div className="w-full flex flex-col gap-8">
            <Header />
            <Searcher setSearch={setSearch} />
            <PokemonsList
                pokemons={pokemonsList}
            />
        </div>
    )
}

export default Home