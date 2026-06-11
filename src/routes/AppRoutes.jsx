import { Routes, Route }
from "react-router-dom";

import Home
from "../pages/Home";

import Movies
from "../pages/Movies";

import MovieDetails
from "../pages/MovieDetails";

import AddMovie
from "../pages/AddMovie";

import EditMovie
from "../pages/EditMovie";

import Favorites
from "../pages/Favorites";

import Login
from "../pages/Login";

import Register
from "../pages/Register";

import Notfound
from "../pages/Notfound";

function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/movies"
        element={<Movies />}
      />

      <Route
        path="/movies/:id"
        element={<MovieDetails />}
      />

      <Route
        path="/add-movie"
        element={<AddMovie />}
      />

      <Route
        path="/edit-movie/:id"
        element={<EditMovie />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="*"
        element={<Notfound />}
      />

    </Routes>
  );
}

export default AppRoutes;