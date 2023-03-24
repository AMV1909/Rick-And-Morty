export function H1() {
    return (
        <h1
            className="text-7xl text-center cursor-pointer"
            onMouseOver={(e) =>
                (e.currentTarget.style.filter = "drop-shadow(0 0 .5em #fff)")
            }
            onMouseOut={(e) => (e.currentTarget.style.filter = "none")}
            onClick={() => window.location.replace("/Rick-And-Morty/")}
        >
            Rick & Morty
        </h1>
    );
}
