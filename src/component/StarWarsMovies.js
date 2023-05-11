import React, { useState, useEffect } from "react";
import "./styles/starWarsMovies.css";
import { Link } from "react-router-dom";

function StarWarsMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://swapi.dev/api/films");
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    }

    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="movie-grid">
        {movies.map((movie, actor) => (
          <div
            key={movie.title}
            className="movie-card"
            style={{
              backgroundImage: `url(${require(`./images/${movie.episode_id}.png`)})`,
            }}
          >
            <h2>{movie.title}</h2>
            <p className="date"> {movie.release_date}</p>
            <p className="movie-details">{movie.opening_crawl}</p>
            <div className="more-info-link">
              <Link
                to={`/:${movie.title}`}
                state={{ movie: movie, actor: actor }}
                className="movie-link"
              >
                More Info
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarWarsMovies;
