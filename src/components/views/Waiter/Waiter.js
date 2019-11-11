import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => {
  return(
    <div className={styles.component}>
      <h2>WAITER VIEW</h2>
      <Link to={process.env.PUBLIC_URL + '/waiter/order'}> NEW Order </Link>
      <Link to={process.env.PUBLIC_URL + '/waiter/order/:id'}> Order by ID </Link>
    </div>
  );
};

export default Waiter;
