import { useContext } from "react";
import { useParams } from "react-router-dom";
import { H1 } from "../Components/H1";
import { CharactersContext } from "../Context/CharactersContext";

export function About() {
    const { id } = useParams();
    const { getCharacterById } = useContext(CharactersContext);
    const character = getCharacterById(parseInt(id));

    return (
        <div className="bg-gray-900 text-white flex justify-center min-h-screen">
            <div className="w-9/12 flex flex-col items-center mb-40">
                <H1 />
                {character && (
                    <div>
                        <div className="w-full mt-10 md:mx-10 flex 0:flex-col md:flex-row justify-between items-center">
                            <div>
                                <h1 className="text-3xl text-center">
                                    {character.name}
                                </h1>
                                <img
                                    className="rounded-full mt-5"
                                    style={{ filter: "none" }}
                                    src={character.image}
                                    alt={character.name}
                                />
                            </div>
                            <div className="mt-10">
                                <div className="flex items-baseline">
                                    <p className="text-xl list-item mr-2">
                                        Status:
                                    </p>
                                    {character.status}
                                </div>
                                <div className="flex items-baseline">
                                    <p className="text-xl list-item mr-2">
                                        Specie:
                                    </p>
                                    {character.species}
                                </div>
                                <div className="flex items-baseline">
                                    <p className="text-xl list-item mr-2">
                                        Gender:
                                    </p>
                                    {character.gender}
                                </div>
                                <div className="flex items-baseline">
                                    <p className="text-xl list-item mr-2">
                                        Origin:
                                    </p>
                                    {character.origin.name}
                                </div>
                                <div className="flex items-baseline">
                                    <p className="text-xl list-item mr-2">
                                        Location:
                                    </p>
                                    {character.location.name}
                                </div>
                                <div className="flex items-baseline">
                                    <p className="text-xl list-item mr-2">
                                        Episodes:
                                    </p>
                                    <div className="flex flex-wrap max-w-200">
                                        {character.episode.length > 1 ? (
                                            character.episode.map(
                                                (episode) =>
                                                    episode.split("/").pop() +
                                                    ", "
                                            )
                                        ) : (
                                            <p>{character.episode[0].split("/").pop()}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
