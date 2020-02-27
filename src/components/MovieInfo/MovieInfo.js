import React from "react";
import PropTypes from 'prop-types'
import styles from "./MovieInfo.module.css";

const MovieInfo = ({ title, date, score, overview, genres }) => (
  <div className={styles.info}>
    <h2>{title}({date})</h2>
    <p>User Score: {score}</p>
    <h3>Overview</h3>
    <p>{overview}</p>
    <h4>Genres</h4>
    <ul className={styles.genresList}>
      {genres.map(genre => (
        <li className={styles.genresListItem} key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  </div>
);
MovieInfo.propTypes ={
  title:PropTypes.string,
  score:PropTypes.number.isRequired,
  overview:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired
}


export default MovieInfo;
