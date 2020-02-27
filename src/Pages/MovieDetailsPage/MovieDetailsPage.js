import React, { Component } from "react";
import { Route } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import MovieCastPage from "../MovieCastPage/MovieCastPage";
import MovieReviewsPage from "../MovieReviewsPage";
import NotFound from "../../Pages/NotfoundPage/NotFoundPage";
import moviesApiServices from "../../services/movies-api-service";
import Spinner from "../../components/Spinner";
import routes from "../../routes";
import styles from "./MovieDetailsPage.module.css";
// import { UtilsService } from "utils/utils";
import formatDate from "../../utils/formatDate";

export default class MovieDetailsPage extends Component {
  state = {
    loading: true,
    error: null,
    movie: null
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.fetchMovie(movieId);
  }

  fetchMovie = movieId => {
    this.setState({ loading: true });
    moviesApiServices
      .fetchMovieDetails(movieId)
      .then(movie => {
        this.setState({ movie });
      })
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push(routes.MOVIES);
  };

  render() {
    const { movie, loading, error } = this.state;
    const { match } = this.props;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {error ? (
              <NotFound title={error} />
            ) : (
              <div>
                <button
                  className={styles.button}
                  type="button"
                  onClick={this.handleGoBack}
                >
                  Go back
                </button>
                <Movie
                  imgUrl={movie.poster_path}
                  alt={movie.title}
                  width="320"
                  title={movie.title}
                  date={formatDate(movie.release_date)}
                  score={movie.vote_average}
                  overview={movie.overview}
                  genres={movie.genres}
                  linkCast={`${match.url}/cast`}
                  linkReviews={`${match.url}/reviews`}
                />
                <Route path={`${match.path}/cast`} component={MovieCastPage} />
                <Route
                  path={`${match.path}/reviews`}
                  component={MovieReviewsPage}
                />
              </div>
            )}
          </>
        )}
      </>
    );
  }
}
