import { Link } from "react-router-dom";

function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  function handleLogout() {

    localStorage.removeItem("user");

    window.location.href = "/login";
  }

  return (

    <nav className="navbar">

      <h2>
        Rom-Com ❤️
      </h2>

      <div>

        <Link to="/">
          Home
        </Link>

        <Link to="/movies">
          Movies
        </Link>

        <Link to="/favorites">
          Favorites
        </Link>

        {!user && (
          <>
            <Link to="/register">
              Register
            </Link>

            <Link to="/login">
              Login
            </Link>
          </>
        )}

        {user && (
          <button
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;