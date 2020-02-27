import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css'

const Navigation = () => (
<ul className={styles.navigatonList}>
    <li className={styles.navItem}>
      <NavLink exact to={routes.HOME} className={styles.navLink} style={{color:'#212121'}} activeStyle={{color:'palevioletred'}}
>Home</NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink to={routes.MOVIES}  className={styles.navLink} style={{color:'#212121'}} activeStyle={{color:'palevioletred'}}
>Movies</NavLink>
    </li>
  </ul>

)


export default Navigation;
