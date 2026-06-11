import { Link } from "react-router-dom";

import { useDispatch }
from "react-redux";

import {
  addFavorite
}
from "../redux/FavoriteSlice";

function MovieCard({
  movie,
  onDelete
}) {

  const dispatch =
    useDispatch();

  function handleFavorite() {

    dispatch(
      addFavorite(movie)
    );

    alert(
      "Added To Favorites ❤️"
    );
  }

  return (

    <div className="card">

      <img
        src={movie.image}
        alt={movie.title}
      />

      <h3>
        {movie.title}
      </h3>

      <p>
        ⭐ {movie.rating}
      </p>

      <div>

        <Link
          to={`/movies/${movie.id}`}
        >
          View
        </Link>

        {" | "}

        <Link
          to={`/edit-movie/${movie.id}`}
        >
          Edit
        </Link>

      </div>

      <button
        onClick={() =>
          onDelete(movie.id)
        }
      >
        Delete
      </button>

      <button
        onClick={
          handleFavorite
        }
      >
        ❤️ Favorite
      </button>

    </div>
  );
}

export default MovieCard;