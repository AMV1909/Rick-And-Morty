import { useState } from "react";

export function Navbar({ page, setPage, maxPage, goTo }) {
    const [inputValue, setInputValue] = useState();

    const onChange = (e) => {
        setInputValue(+e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(inputValue);
    };

    return (
        <div className="w-9/12 flex justify-between items-center mt-10">
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
            {goTo && (
                <form onSubmit={handleSubmit}>
                    <input
                        className="bg-gray-800 text-white text-center rounded p-2 appearance-none w-full"
                        type="number"
                        min="1"
                        max={maxPage}
                        onChange={onChange}
                    />
                </form>
            )}
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
    );
}
