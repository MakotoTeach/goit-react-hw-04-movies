import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MovieAdditionalInfo.module.css";

const MovieAdditionalInfo = ({linkCast, linkReviews}) => (
  <div className={styles.additionalInfo}>
    <h3>Additional information</h3>
    <ul className={styles.additionalInfoList}>
      <li className={styles.listItem}>
        <NavLink 
          to={linkCast}
          className={styles.itemLink}
          activeStyle={{ color: "palevioletred" }}
          replace
        >
          Cast
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          to={linkReviews}
          className={styles.itemLink}
          activeStyle={{ color: "palevioletred" }}
          replace
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  </div>
);

export default MovieAdditionalInfo;