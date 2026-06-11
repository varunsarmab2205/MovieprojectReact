import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Api from "../services/Api";

function AddMovie() {

  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    hero: "",
    heroine: "",
    director: "",
    year: "",
    genre: "",
    rating: "",
    image: "",
    description: ""
  });

  function handleChange(e) {

    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      await Api.post(
        "/movies",
        movie
      );

      alert("Movie Added Successfully");

      navigate("/movies");

    } catch (error) {

      console.log(error);

    }
  }

  return (

    <div className="form-container">

      <h1>Add Movie</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="hero"
          placeholder="Hero"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="heroine"
          placeholder="Heroine"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="year"
          placeholder="Year"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Poster URL"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Movie
        </button>

      </form>

    </div>
  );
}

export default AddMovie;