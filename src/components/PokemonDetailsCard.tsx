// import { useNavigate } from 'react-router-dom'
import { FC } from "react"
import { Pokemon } from "../graphql"

interface PokemonSingleCardProps {
    pokemon: Pokemon
}

const PokemonDetailsCard: FC<PokemonSingleCardProps> = ({ pokemon }) => {
    return (
        <div className="border-2 border-gray-300 p-4 border-r-8 rounded-xl flex flex-col gap-4 cursor-pointer">
            <div className="flex justify-between">
                <h1>{pokemon.name}</h1>
                <p>#{pokemon.number}</p>
            </div>
            <img src={pokemon.image || ""} />
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
            <div>
                <p>STATS :</p>
                <div className="flex justify-between">
                    {
                        pokemon.attacks?.fast?.map((attack, index) => (
                            <div
                                key={index}
                                className="bg-gray-300 rounded-lg px-2 py-1 gap-6 flex flex-row flex-nowrap"
                            >
                                <p >

                                    { attack?.name?.split(' ').map((word: string) => word[0]).join('') }
                                </p>
                                <p >{attack?.damage}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PokemonDetailsCard