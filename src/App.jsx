import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home } from "./Page";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Rick-And-Morty" element={<Home />} />
                <Route path="/Rick-And-Morty/about/:id" element={<About />} />
            </Routes>
        </Router>
    );
}
