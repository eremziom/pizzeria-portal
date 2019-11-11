import React from 'react';
import styles from './Booking.scss';

const Booking = () => {
  let pathArray = window.location.pathname.split('/');
  let id = pathArray[3];
  return(
    <div className={styles.component}>
      <h2>Booking VIEW</h2>
      <span>{id}</span>
    </div>
  );
};

export default Booking;
