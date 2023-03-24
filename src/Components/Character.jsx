import { useNavigate } from "react-router-dom";

export function Character({ character: { id, name, image } }) {
    const navigate = useNavigate();

    return (
        <div className="mt-10 mx-10 div">
            <h2 className="text-xl text-center">{name}</h2>
            <img
                className="rounded-full cursor-pointer"
                style={{ filter: "none" }}
                src={image}
                alt={name}
                onMouseOver={(e) =>
                    (e.currentTarget.style.filter =
                        "drop-shadow(0 0 .5em #fff)")
                }
                onMouseOut={(e) => (e.currentTarget.style.filter = "none")}
                onClick={() => navigate(`/Rick-And-Morty/about/${id}`)}
            />
        </div>
    );
}
