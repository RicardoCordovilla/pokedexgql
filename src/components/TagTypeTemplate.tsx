import { FC } from "react"
import { pokemonColorType } from "../constants/tagColors"

interface TagTypeTemplateProps {
    type: string | null
}

export const TagTypeTemplate:FC<TagTypeTemplateProps> = ({ type }) => {
    const typeColor = pokemonColorType[type?.toLowerCase() as keyof typeof pokemonColorType] || 'gray'
    return (
        <div
            key={type}
            className={`px-3 py-1 rounded-full`}
            style={{ backgroundColor: typeColor }}
        >
            <p className="text-xs">{type}</p>
        </div>
    )
}
