import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Api from "../services/Api";

import MovieCard from "../components/MovieCard";

function Movies() {

  const [movies, setMovies] =
    useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {

    try {

      const response =
        await Api.get("/movies");

      setMovies(response.data);

    } catch (error) {

      console.log(error);

    }
  }

  async function deleteMovie(id) {

    try {

      await Api.delete(
        `/movies/${id}`
      );

      setMovies(
        movies.filter(
          movie => movie.id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }
  }

  return (
    <div>

      <h1>
        My Favourite Rom-Com Movies
      </h1>

      <Link
        to="/add-movie"
        className="add-btn"
      >
        Add Movie
      </Link>

      <div className="movies">

        {movies.map(movie => (

          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={deleteMovie}
          />

        ))}

      </div>

    </div>
  );
}

export default Movies;