import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <h1>🎬 My Favourite Rom-Com Movies ❤️</h1>

      <p>
        Explore Varun's favorite Telugu Rom-Com
        movies collection.
      </p>

      <Link
        to="/movies"
        className="home-btn"
      >
        Explore Movies
      </Link>

    </div>
  );
}

export default Home;