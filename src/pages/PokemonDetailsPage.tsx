import { useParams } from "react-router-dom"
import { useAllPokemosQuery, useGetPokemonQuery } from "../graphql"
import PokemonDetailsCard from "../components/PokemonDetailsCard"
import Searcher from "../components/Searcher"
import { useEffect, useState } from "react"
import PokemonsList from "../components/PokemonsList"
import Loader from "../components/Loader"

const PokemonDetailsPage = () => {
  const { id } = useParams()
  const { data, loading, error } = useGetPokemonQuery({ variables: { id: id || '' } })
  const { data: allPokes } = useAllPokemosQuery()
  const [search, setSearch] = useState('')
  const [filterSearched, setFilterSearched] = useState(allPokes)


  useEffect(() => {
    const filtered = allPokes?.pokemons?.filter(
      (pokemon) => pokemon?.name?.toLowerCase().includes(search.toLowerCase())
    )
    setFilterSearched({ pokemons: filtered })
  }, [search, allPokes])

  if (data?.pokemon === null || data?.pokemon === undefined)
    return <Loader />

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error...</div>
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex justify-start">
        <button
          className="p-2 border-slate-700 rounded-md"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
      <PokemonDetailsCard pokemon={data?.pokemon || {}} />
      <div className="flex flex-col gap-4">
        <span className="text-xl mt-4">
          Compare with:
        </span>
        <div className="flex flex-col gap-4">
          <Searcher
            setSearch={setSearch}
            exclude={data?.pokemon?.id}
          />

          <PokemonsList
            pokemons={filterSearched}
          />

        </div>
      </div>

    </div>
  )
}

export default PokemonDetailsPage