import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CharactersContextProvider } from "./Context/CharactersContext";
import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CharactersContextProvider>
            <App />
        </CharactersContextProvider>
    </StrictMode>
);
