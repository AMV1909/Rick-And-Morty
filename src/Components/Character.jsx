export function Character({ character: { name, image } }) {
    return (
      <div className="mt-10 mx-10 div">
        <h2 className="text-xl text-center">{name}</h2>
        <img 
          className="rounded-full cursor-pointer"
          style={{ filter: "none" }}
          src={image} 
          alt={name} 
          // Add the onMouseOver and onMouseOut events here
          onMouseOver={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 .5em #fff)"}
          onMouseOut={(e) => e.currentTarget.style.filter = "none"}
        />
      </div>
    );
  }
  