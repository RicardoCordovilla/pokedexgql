// import { useNavigate } from 'react-router-dom'
import { FC } from "react"
import { Pokemon } from "../graphql"
import { TagTypeTemplate } from "./TagTypeTemplate"

interface PokemonSingleCardProps {
    pokemon: Pokemon
}

const PokemonDetailsCard: FC<PokemonSingleCardProps> = ({ pokemon }) => {
    return (
        <div className="flex flex-row flex-wrap p-8 rounded-xl shadow-xl w-full m-auto gap-8 details-card-container">
            <div className="flex justify-center items-center w-fit m-auto"
                style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
            >
                <img src={pokemon.image || ""}
                    className="h-40"
                />
            </div>
            <div className="flex flex-col items-start details-card">
                <p className="text-sm font-bold">#{pokemon.number}</p>
                <h2 className="text-2xl font-bold text-gray-800">{pokemon.name}</h2>
                <div
                    className="w-full flex justify-between"
                >
                    <div className="flex justify-start gap-2">
                        {
                            pokemon.types?.map((type) => (<TagTypeTemplate key={type} type={type} />))
                        }
                    </div>
                </div>
                <p
                    className="text-gray-900 text-left"
                >
                    {
                        `
           A strange creature with the name of ${pokemon.name} and the types of ${pokemon.types?.join(', ')}.
           `
                    }
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                    <div className="flex flex-row gap-4 bg-slate-100 px-2 py-1 rounded-md w-fit items-center">
                        <strong className="text-sm">
                            Height:
                        </strong>
                        <span>{pokemon.height?.maximum}</span>
                    </div>
                    <div className="flex flex-row gap-4 bg-slate-100 px-2 py-1 rounded-md w-fit items-center">
                        <strong className="text-sm">
                            Weight:
                        </strong>
                        <span>{pokemon.weight?.maximum}</span>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2 mt-2">
                    <p>STATS :</p>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            pokemon.attacks?.fast?.map((attack, index) => (
                                <div
                                    key={index}
                                    // className='rounded-lg px-2 py-1 gap-6 flex flex-row flex-nowrap"
                                    className={
                                        `rounded-lg px-2 py-1 gap-6 flex flex-row flex-nowrap ${attack?.damage === 0 ? 'bg-green-500' : 'bg-red-500'
                                        }`
                                    }
                                >
                                    <p >

                                        {attack?.name?.split(' ').map((word: string) => word[0]).join('')}
                                    </p>
                                    <p >{attack?.damage}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PokemonDetailsCard