import { useContext, useState } from "react";
import { CharactersContext } from "../Context/CharactersContext";

export function Navbar() {
    const { page, setPage, maxPage, searchCharacters, goTo } =
        useContext(CharactersContext);
    const [inputValue, setInputValue] = useState(1);

    const onChange = (e) => {
        setInputValue(+e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(inputValue);
    };

    return (
        <div className="w-9/12 grid grid-cols-2 mt-10 whitespace-nowrap">
            <div className="0:col-span-2 lg:col-span-1 flex items-center lg:mx-3">
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    className="bg-gray-800 text-white rounded p-2 appearance-none ml-5 0:max-w-150 md:max-w-200"
                    onChange={(e) => searchCharacters(e.target.value)}
                />
            </div>
            {goTo && (
                <div className="0:col-span-2 lg:col-span-1 flex justify-between items-center 0:mt-10 lg:mt-0">
                    {page === 1 ? (
                        <p>Page: {page}</p>
                    ) : (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 p-2 rounded"
                            onClick={() => setPage(page - 1)}
                        >
                            Page {page - 1}
                        </button>
                    )}
                    <form onSubmit={handleSubmit}>
                        <input
                            className="bg-gray-800 text-white text-center rounded p-2 appearance-none w-full"
                            type="number"
                            min="1"
                            max={maxPage}
                            onChange={onChange}
                        />
                    </form>
                    {page === maxPage ? (
                        <p>Page: {page}</p>
                    ) : (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 p-2 rounded"
                            onClick={() => setPage(page + 1)}
                        >
                            Page {page + 1}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
