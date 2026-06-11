import { useState } from "react";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import Api from "../services/Api";

function EditMovie() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] =
    useState({});

  useEffect(() => {

    fetchMovie();

  }, []);

  async function fetchMovie() {

    const response =
      await Api.get(
        `/movies/${id}`
      );

    setMovie(
      response.data
    );
  }

  function handleChange(e) {

    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    await Api.put(
      `/movies/${id}`,
      movie
    );

    alert("Movie Updated");

    navigate("/movies");
  }

  return (

    <div className="form-container">

      <h1>Edit Movie</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={movie.title || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="hero"
          value={movie.hero || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="heroine"
          value={movie.heroine || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="director"
          value={movie.director || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="year"
          value={movie.year || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          value={movie.genre || ""}
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          value={movie.rating || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={movie.image || ""}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={movie.description || ""}
          onChange={handleChange}
        />

        <button type="submit">
          Update Movie
        </button>

      </form>

    </div>
  );
}

export default EditMovie;