export function Character({ character: { name, image } }) {
    return (
        <div className="mt-10">
            <h2 className="text-xl text-center">{name}</h2>
            <img className="rounded-full" src={image} alt={name} />
        </div>
    );
}
