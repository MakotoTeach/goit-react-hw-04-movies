import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import routes from "../../routes";
import { Link } from "react-router-dom";
import styles from "./MoviesList.module.css";

class MoviesList extends Component {
  render() {
    const { movies, location } = this.props;

    return (
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
    );
  }
}

export const MoviesListWithRouter = withRouter(MoviesList);
