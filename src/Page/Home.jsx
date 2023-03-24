import { CharactersList } from "../components/CharactersList";
import { H1 } from "../Components/H1";

export function Home() {
    return (
        <div className="bg-gray-900 text-white flex justify-center min-h-screen">
            <div className="w-9/12 flex flex-col items-center mb-40">
                <H1 />
                <CharactersList />
            </div>
        </div>
    );
}
