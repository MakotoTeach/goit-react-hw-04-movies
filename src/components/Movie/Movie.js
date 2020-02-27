import React from "react";
import Image from "../Image";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieAdditionalInfo from "../MovieAdditionalInfo/MovieAdditionalInfo";
import styles from "./Movie.module.css";

const Movie = ({
  imgUrl,
  alt,
  width,
  title,
  date,
  score,
  overview,
  genres,
  linkCast,
  linkReviews
}) => (
  <>
    <div className={styles.movieDetails}>
      <Image imgUrl={imgUrl} alt={alt} width={width} />
      <MovieInfo
      title={title}
      date={date}
      score={score}
      overview={overview}
      genres={genres}
    />
    </div>
    <MovieAdditionalInfo linkCast={linkCast} linkReviews={linkReviews} />
  </>
);

export default Movie;
