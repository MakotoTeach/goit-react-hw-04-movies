import React, { Component } from "react";
import {MoviesListWithRouter} from '../../components/MoviesList/MoviesList'
import getQueryParams from "../../utils/getQueryParams";
import Searchbar from "../../components/Searchbar/Searchbar";
import moviesApiServices from "../../services/movies-api-service";
import Spinner from "../../components/Spinner";

export default class MoviesPage extends Component {
  state = {
    loading: false,
    error: null,
    movies: []
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (!query) {
      return;
    }
    this.fetchMovies(query);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (nextQuery === prevQuery) {
      return;
    }
    this.fetchMovies(nextQuery);
  }

  fetchMovies = query => {
    this.setState({ loading: true });
    moviesApiServices
      .fetchMoviesByQuery(query)
      .then(movies => {
        this.setState({ movies });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`
    });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <h2>Movies Page</h2>
            <Searchbar onSearch={this.setSearchQuery} />
            <MoviesListWithRouter movies={movies}></MoviesListWithRouter>    
          </div>
        )}
      </>
    );
  }
}
