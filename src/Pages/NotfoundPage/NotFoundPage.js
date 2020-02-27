import React from "react";
import { Link } from "react-router-dom";
import imgNotFound from "../../assets/sad-donald-duck.png";
import styles from './NotFoundPage.module.css'

const NotFound = ({title='dsda'}) => (
  <div className={styles.container}>
    <h2 className={styles.status}>{title}</h2>
    <img src={imgNotFound} alt="donald sad" width="320" />
    <p className={styles.massage}>
      Whoops, something went wrong. Here the <Link className={styles.link} to="/">link</Link> to home page
    </p>
  </div>
);

export default NotFound;