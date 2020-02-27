import React, { Component } from "react";
import { Link } from "react-router-dom";
import moviesApiServices from "../../services/movies-api-service";
import routes from "../../routes";
import Spinner from '../../components/Spinner'
import styles from "./HomePage.module.css";

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
    const { location } = this.props;
    return (
      <>
        {loading ? (
          <Spinner/>
        ) : (
          <div>
            <h2>Trending today</h2>
            <ul className={styles.moviesList}>
              {movies.map(movie => (
                <li key={movie.id}>
                  <Link
                    className={styles.movieLink}
                    to={{
                      pathname: `${routes.MOVIES}/${movie.id}`,
                      state: { from: location }
                    }}
                  >
                    {movie.title || movie.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}
