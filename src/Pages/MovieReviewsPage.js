import React, { Component } from "react";
import MovieReviewsList from "../components/MovieReviewsList/MovieReviewsList";
import moviesApiServices from "../services/movies-api-service";
import Spinner from "../components/Spinner";

export default class MovieReviewsPage extends Component {
  state = {
    loading: false,
    error: null,
    reviews: []
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.fetchReviews(movieId);
  }

  fetchReviews = movieId => {
    this.setState({ loading: true });
    moviesApiServices
      .fetchMovieReviews(movieId)
      .then(data => {
        const reviews = data.results;
        this.setState({ reviews });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { reviews, loading } = this.state;
    return (
      <>
      {loading ? <Spinner/> : reviews.length > 0 ? (
          <MovieReviewsList reviews={reviews} />
        ) : (
          <p>We dont have any reviews for this movie.</p>
        )}
        
      </>
    );
  }
}
