import React from 'react';
import PropTypes from 'prop-types'
import styles from './MovieReviewsList.module.css'


const MovieReviewsList = ({reviews}) => (
  <ul  className={styles.reviewsList}>
  {reviews.map(review => (
    <li key={review.id}>
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </li>
  ))}
</ul>
)

MovieReviewsList.propTypes ={
  reviews:PropTypes.array.isRequired
}



export default MovieReviewsList;