import { useNavigate } from 'react-router-dom'
import { FC } from "react"
import { Pokemon } from "../graphql"

interface PokemonSingleCardProps {
  pokemon: Pokemon
}

const PokemonSingleCard: FC<PokemonSingleCardProps> = ({ pokemon }) => {
  const navigate = useNavigate()
  return (
    <div className="border-gray-300 p-4  rounded-xl flex flex-col gap-4 cursor-pointer shadow-xl" 
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <div className="flex justify-between">
        <h1>{pokemon.name}</h1>
        <p>#{pokemon.number}</p>
      </div>
      <img src={pokemon?.image || ""} />
      <div className="flex justify-between">
        {
          pokemon?.types?.map((type, index) => (
            <div
              key={index}
              className="bg-gray-300 rounded-lg px-2 py-1"
            >
              <p >{type}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PokemonSingleCard