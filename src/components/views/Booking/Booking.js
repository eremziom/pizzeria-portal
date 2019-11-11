import React from 'react';
import styles from './Booking.module.scss';

const Booking = () => {
  let pathArray = window.location.pathname.split('/');
  let id = pathArray[4];
  return(
    <div className={styles.component}>
      <h2>Booking VIEW</h2>
      <span>{id}</span>
    </div>
  );
};

export default Booking;
