import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Characters from "./Characters";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import "./styles/movieDetails.css";

const MoviePage = () => {
  const film = useLocation();
  const navigate = useNavigate();
  const { movie } = film.state;

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <section className="details-main">
        <section className="details">
          <header>
            <div className="back">
              <button onClick={handleClick}>&larr; Back to list</button>
            </div>

            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
          </header>

          <section className="characters">
            <h3 className="gray">Description</h3>
            <p>{movie.opening_crawl}</p>
          </section>

          <section className="characters">
            <h3>Characters</h3>
            <ul>
              {movie.characters.map((character, key) => (
                <Characters key={key} character={character} />
              ))}
            </ul>
          </section>
          <section className="characters">
            <h3>planets</h3>
            <ul>
              {movie.planets.map((planet, id) => (
                <Planets planet={planet} key={id} />
              ))}
            </ul>
          </section>
          <section className="characters">
            <h3>Species</h3>
            <ul>
              {movie.species.map((specie, id) => (
                <Species specie={specie} key={id} />
              ))}
            </ul>
          </section>
          <section className="characters">
            <h3>Starships</h3>
            <ul>
              {movie.starships.map((starship, id) => (
                <Starships starship={starship} key={id} />
              ))}
            </ul>
          </section>
          <section className="characters">
            <h3>Vehicles</h3>
            <ul>
              {movie.vehicles.map((vehicle, id) => (
                <Vehicles vehicle={vehicle} key={id} />
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default MoviePage;
