import React from 'react';
import styles from './Waiter.scss';
import {Link} from 'react-router-dom';

const Waiter = () => {
  return(
    <div className={styles.component}>
      <h2>WAITER VIEW</h2>
      <Link to={process.env.PUBLIC_URL + '/order'}> NEW Order </Link>
      <Link to={process.env.PUBLIC_URL + '/order/:id'}> Order by ID </Link>
    </div>
  );
};

export default Waiter;
