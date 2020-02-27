const origin = "https://api.themoviedb.org/3/";
const key = "e6e92c91ab88816ebbe51f4f3bd0c1c5";
const trendingMovies = "trending/all/day";
const searchMovies = "search/movie?query=";
const searchMovieDetails = "movie/";

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
const fetchTrendingMovies = () => {
  return fetch(`${origin}${trendingMovies}?api_key=${key}`)
    .then(res => res.json())
    .then(data => {
      return data.results;
    });
};

//api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1
const fetchMoviesByQuery = query => {
  return fetch(
    `${origin}${searchMovies}${query}&api_key=${key}&language=en-US&page=1&include_adult=true`
  )
    .then(res => res.json())
    .then(data => {
      return data.results;
    });
};

//api.themoviedb.org/3/movie/25508?api_key=e6e92c91ab88816ebbe51f4f3bd0c1c5&language=en-US
const fetchMovieDetails = movieId => {
  return fetch(
    `${origin}${searchMovieDetails}${movieId}?api_key=${key}&language=en-US`
  ).then(res => {
    const response = res.json();

    if (res.status === 404) {
      throw new Error('Movie not found');
    } else if (res.status !==200) {
      throw new Error(response)
    }

    return response;
  });
};

//api.themoviedb.org/3/movie/25508/credits?api_key=e6e92c91ab88816ebbe51f4f3bd0c1c5
const fetchMovieCast = movieId => {
  return fetch(`${origin}movie/${movieId}/credits?api_key=${key}`).then(res =>
    res.json()
  );
};
//api.themoviedb.org/3/movie/330457/reviews?api_key=e6e92c91ab88816ebbe51f4f3bd0c1c5&language=en-US&page=1
const fetchMovieReviews = movieId => {
  return fetch(
    `${origin}movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`
  ).then(res => res.json());
};

export default {
  fetchTrendingMovies,
  fetchMoviesByQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews
};
