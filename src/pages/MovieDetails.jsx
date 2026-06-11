import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import Api from "../services/Api";

function MovieDetails() {

  const { id } =
    useParams();

  const [movie, setMovie] =
    useState(null);

  useEffect(() => {

    fetchMovie();

  }, []);

  async function fetchMovie() {

    try {

      const response =
        await Api.get(
          `/movies/${id}`
        );

      setMovie(
        response.data
      );

    } catch (error) {

      console.log(error);

    }
  }

  if (!movie) {

    return <h2>Loading...</h2>;
  }

  return (

    <div className="details">

      <img
        src={movie.image}
        alt={movie.title}
        width="300"
      />

      <h1>{movie.title}</h1>

      <p>
        <strong>Hero:</strong>
        {" "}
        {movie.hero}
      </p>

      <p>
        <strong>Heroine:</strong>
        {" "}
        {movie.heroine}
      </p>

      <p>
        <strong>Director:</strong>
        {" "}
        {movie.director}
      </p>

      <p>
        <strong>Year:</strong>
        {" "}
        {movie.year}
      </p>

      <p>
        <strong>Genre:</strong>
        {" "}
        {movie.genre}
      </p>

      <p>
        <strong>Rating:</strong>
        ⭐ {movie.rating}
      </p>

      <p>
        <strong>Description:</strong>
        {" "}
        {movie.description}
      </p>

    </div>
  );
}

export default MovieDetails;