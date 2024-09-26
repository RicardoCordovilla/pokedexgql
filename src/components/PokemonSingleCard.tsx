import { useNavigate } from 'react-router-dom'
import { FC } from "react"
import { Pokemon } from "../graphql"
import { TagTypeTemplate } from './TagTypeTemplate'

interface PokemonSingleCardProps {
  pokemon: Pokemon
}

const PokemonSingleCard: FC<PokemonSingleCardProps> = ({ pokemon }) => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col flex-nowrap gap-4 p-4 rounded-xl shadow-xl'>
      <div className=" flex flex-row gap-4 ">
        <div className='flex justify-between w-full'>
          <div
            className="w-full flex justify-between"
          >
            <div className="flex justify-start gap-2">
              {
                pokemon.types?.map((type) => (<TagTypeTemplate key={type} type={type} />))
              }
            </div>
          </div>
          <p className="text-lg font-bold">#{pokemon.number}</p>
        </div>
      </div >
      <div className='flex flex-row gap-4 flex-nowrap w-full'>
        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="text-3xl font-bold text-gray-800">{pokemon.name}</h2>
          <p
            className="text-gray-900 text-left"
          >
            {
              `
           A strange creature with the name of ${pokemon.name} and the types of ${pokemon.types?.join(', ')}.
           `
            }
          </p>
          <button
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            className="bg-gray-300 p-2 rounded-md"
          >
            Know More
          </button>
        </div>
        <div className="w-full flex justify-end items-end pb-4">
          <img src={pokemon?.image || ""}
            className="w-48"
          />
        </div>
      </div>

    </div>

  )
}

export default PokemonSingleCard