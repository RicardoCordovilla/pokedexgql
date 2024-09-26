import { FC, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SearcherProps {
    setSearch: (search: string) => void;
    exclude?: string;
}

const Searcher: FC<SearcherProps> = ({ setSearch }) => {
    const [searchValue, setSearchValue] = useState<string>('')

    useEffect(() => {
        setTimeout(() => {
            setSearch(searchValue)
        }, 800)
    }, [searchValue, setSearch])

    return (
        <div
            className="flex flex-row justify-center items-center gap-4 w-full"
        >
            <input
                className="border-gray-300 p-4 rounded-md input-search size-12"
                type="text"
                placeholder="search eh. ditto or bulbasaur"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <button
                className="p-3 rounded-md shadow-2xl bg-red-700 border-none text-white hover:bg-red-500  items-center justify-center flex"
                onClick={() => setSearch(searchValue)}
            >
                <IoSearch 
                    size={22}
                />
            </button>
        </div>
    )
}

export default Searcher