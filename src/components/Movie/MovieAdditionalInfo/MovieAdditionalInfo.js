import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import styles from "./MovieAdditionalInfo.module.css";

const MovieAdditionalInfoComponent = ({linkCast, linkReviews, location}) => (
  <div className={styles.additionalInfo}>
    <h3>Additional information</h3>
    <ul className={styles.additionalInfoList}>
      <li className={styles.listItem}>
        <NavLink 
          to={{pathname: linkCast, state: location.state}}
          className={styles.itemLink}
          activeStyle={{ color: "palevioletred" }}
          replace
        >
          Cast
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          to={{pathname: linkReviews, state: location.state}}
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

export const MovieAdditionalInfo = withRouter(MovieAdditionalInfoComponent);
