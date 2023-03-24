import { createContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { getCharacters } from "../API/Characters";

export const CharactersContext = createContext();

export function CharactersContextProvider({ children }) {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [goTo, setGoTo] = useState(true);
    const [loading, setLoading] = useState(true);

    const getCharactersF = async (page) => {
        await getCharacters(page).then((data) => {
            setCharacters(data.results);
            setMaxPage(data.info.pages);
            setLoading(false);
        });
    };

    useEffect(() => {
        getCharactersF(page);
    }, [page]);

    const searchCharacters = async (search) => {
        if (search.trim() !== "") {
            setGoTo(false);
            setLoading(true);
            setCharacters([]);

            for (let i = 1; i <= maxPage; i++) {
                await getCharacters(i).then((data) => {
                    setCharacters((characters) => [
                        ...characters,
                        ...data.results.filter((character) =>
                            character.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ),
                    ]);
                });
            }

            setLoading(false);
        } else {
            setGoTo(true);
            setLoading(true);
            setPage(1);

            getCharacters(page).then((data) => {
                setCharacters(data.results);
                setMaxPage(data.info.pages);
                setLoading(false);
            });
        }
    };

    const debouncedSearchCharacters = debounce(searchCharacters, 1000);

    const getCharacterById = (id) => {
        return characters.find((character) => character.id === id);
    };

    return (
        <CharactersContext.Provider
            value={{
                getCharactersF,
                characters,
                page,
                setPage,
                maxPage,
                loading,
                searchCharacters: debouncedSearchCharacters,
                goTo,
                getCharacterById,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
}
