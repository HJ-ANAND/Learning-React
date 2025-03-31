const API_KEYS = "d72c1fb023baf6c5459d7b29c67f99b8";
const BASE_URL = "https://api.themoviedb.org/3";

export const GetPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEYS}`);
  const data = await response.json();
  return data.results;
};

export const SearchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEYS}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
