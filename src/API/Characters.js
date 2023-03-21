import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character?page=";

export const getCharacters = async (page) => {
    return await axios
        .get(`${API_URL}${page}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
};
