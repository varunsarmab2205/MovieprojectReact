import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import {
  removeFavorite
} from "../redux/FavoriteSlice";

function Favorites() {

  const dispatch =
    useDispatch();

  const favorites =
    useSelector(
      state =>
      state.favorites
    );

  return (
    <div>

      <h1>
        ❤️ Favorite Movies
      </h1>

      {
        favorites.length === 0 &&
        (
          <h2>
            No favorites added.
          </h2>
        )
      }

      <div className="movies">

        {favorites.map(movie => (

          <div
            className="card"
            key={movie.id}
          >

            <img
              src={movie.image}
              alt={movie.title}
              width="200"
            />

            <h3>
              {movie.title}
            </h3>

            <p>
              ⭐ {movie.rating}
            </p>

            <button
              onClick={() =>
                dispatch(
                  removeFavorite(
                    movie.id
                  )
                )
              }
            >
              Remove
            </button>

          </div>

        ))}
      </div>

    </div>
  );
}

export default Favorites;