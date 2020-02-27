import React, { Component } from "react";
import {MoviesListWithRouter} from '../../components/MoviesList/MoviesList'
import moviesApiServices from "../../services/movies-api-service";
import Spinner from '../../components/Spinner'


export default class HomePage extends Component {
  state = {
    loading: true,
    error: null,
    movies: []
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    moviesApiServices
      .fetchTrendingMovies()
      .then(movies => {
        this.setState({ movies });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <>
        {loading ? (
          <Spinner/>
        ) : (
          <div>
            <h2>Trending today</h2>
           <MoviesListWithRouter movies={movies}/>
          </div>
        )}
      </>
    );
  }
}
