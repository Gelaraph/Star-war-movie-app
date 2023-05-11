import { useState } from "react";
import "./App.css";
import StarWarsMovies from "./component/StarWarsMovies";
import { Route, Routes } from "react-router-dom";
import MoviePage from "./component/MoviePage";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<StarWarsMovies />} />
          <Route path="/:movie" element={<MoviePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
