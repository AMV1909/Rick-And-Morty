import { CharactersList } from "./Components/CharactersList";

export function App() {
    return (
        <div className="bg-gray-900 text-white flex justify-center">
            <div className="w-9/12 flex flex-col items-center">
                <h1 className="text-7xl text-center">Rick & Morty</h1>
                <CharactersList />
            </div>
        </div>
    );
}
