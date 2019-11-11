import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => {
  return(
    <div className={styles.component}>
      <h2>TABLES VIEW</h2>
      <Link to={process.env.PUBLIC_URL + '/tables/booking'}> NEW Booking </Link>
      <Link to={process.env.PUBLIC_URL + '/tables/booking/:id'}> Boking by ID </Link>
      <Link to={process.env.PUBLIC_URL + '/tables/event'}> NEW Event </Link>
      <Link to={process.env.PUBLIC_URL + '/tables/event/:id'}> Event by ID </Link>

    </div>
  );
};

export default Tables;
