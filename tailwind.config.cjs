/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                175: "175px",
                200: "200px",
            },
            screens: {
                "0": "0",
            },
        },
    },
    plugins: [],
};
