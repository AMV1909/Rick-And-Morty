import { useState, useEffect } from "react";
import { getCharacters } from "../API/Characters";
import { Character } from "./Character";
import { Navbar } from "./Navbar";

export function CharactersList() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        getCharacters(page).then((characters) => {
            setCharacters(characters.results);
            setMaxPage(characters.info.pages);
        });
    }, [page]);

    return (
        <div className="flex flex-wrap justify-around mb-10 ">
            <Navbar page={page} setPage={setPage} maxPage={maxPage} goTo={true} />

            {characters &&
                characters.map((character) => (
                    <Character key={character.id} character={character} />
                ))}

            <Navbar page={page} setPage={setPage} maxPage={maxPage} goTo={false} />
        </div>
    );
}
