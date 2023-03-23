import { useContext } from "react";
import { CharactersContext } from "../Context/CharactersContext";
import { Character } from "./Character";
import { Navbar } from "./Navbar";

export function CharactersList() {
    const { characters, loading } = useContext(CharactersContext);

    return (
        <div className="flex flex-wrap justify-around mb-10 ">
            <Navbar />

            {loading === true ? (
                <p className="text-5xl text-center w-9/12 mt-10">Loading...</p>
            ) : characters.length > 0 ? (
                characters.map((character) => (
                    <Character key={character.id} character={character} />
                ))
            ) : (
                <p className="text-5xl text-center w-9/12 mt-10">No results</p>
            )}
        </div>
    );
}
