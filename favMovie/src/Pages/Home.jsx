import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { SearchMovies, GetPopularMovies } from "../services/api";
import { useState, useEffect } from "react";

const Home = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const LoadPopularMovies = async () => {
      try {
        const PopularMovies = await GetPopularMovies();
        setMovies(PopularMovies);
      } catch (err) {
        console.log(err);
        SetError("Failed to load movies...");
      } finally {
        SetLoading(false);
      }
    };

    LoadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    SetLoading(true);
    try {
      const SearchResults = await SearchMovies(searchQuery);
      setMovies(SearchResults);
      SetError(null);
    } catch (err) {
      console.log(err);
      SetError("Failed to search movies...");
    } finally {
      SetLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
