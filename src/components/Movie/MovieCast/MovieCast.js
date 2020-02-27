import React, { Component } from "react";
import Image from "../../Image";
import moviesApiServices from "../../../services/movies-api-service";
import Spinner from "../../Spinner";
import styles from "./MovieCast.module.css";

export default class MovieCast extends Component {
  state = {
    loading: true,
    error: null,
    actors: []
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.fetchCast(movieId);
  }

  fetchCast = movieId => {
    moviesApiServices
      .fetchMovieCast(movieId)
      .then(data => {
        const actors = data.cast;
        this.setState({ actors, loading: false });
      })
      .catch(error => this.setState({ error }))
  };

  render() {
    const { actors, loading } = this.state;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <ul className={styles.castList}>
            {actors.map(actor => (
              <li key={actor.id} className={styles.castListItem}>
                <Image
                  imgUrl={actor.profile_path}
                  alt={actor.character}
                  width="100"
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
