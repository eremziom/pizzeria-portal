import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

const Tables = () => {
  return(
    <div className={styles.component}>
      <h2>TABLES VIEW</h2>
      <Link to={process.env.PUBLIC_URL + '/booking'}> NEW Booking </Link>
      <Link to={process.env.PUBLIC_URL + '/booking/:id'}> Boking by ID </Link>
      <Link to={process.env.PUBLIC_URL + '/event'}> NEW Event </Link>
      <Link to={process.env.PUBLIC_URL + '/event/:id'}> Event by ID </Link>

    </div>
  );
};

export default Tables;
