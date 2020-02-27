import React from "react";
import PropTypes from 'prop-types'

const Image = ({ imgUrl, alt, width }) => (
  <img
    src={
      imgUrl
        ? `https://image.tmdb.org/t/p/w500${imgUrl}`
        : `https://dummyimage.com/${width}/2a2a2a/ffffff&text=+NO+IMAGE`
    }
    alt={alt}
    width={width}
  />
);

Image.propTypes ={
  imgUrl:PropTypes.string,
  alt:PropTypes.string.isRequired,
  width:PropTypes.string.isRequired
}


export default Image;
