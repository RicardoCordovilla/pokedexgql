import { FC, useEffect, useState } from "react";

interface SearcherProps {
    setSearch: (search: string) => void;
}

const Searcher: FC<SearcherProps> = ({ setSearch }) => {
    const [searchValue, setSearchValue] = useState<string>('')

    useEffect(() => {
        setTimeout(() => {
            setSearch(searchValue)
        }, 500)
    }, [searchValue, setSearch])

    return (
        <div
            className="flex flex-row justify-center items-center gap-4 w-full"
        >
            <input
                className="border-2 border-gray-300 p-2"
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}/>
            <button
                onClick={() => setSearch(searchValue)}
            >
                Search
            </button>
        </div>
    )
}

export default Searcher