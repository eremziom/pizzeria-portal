import React from 'react';
import styles from './Event.scss';

const Event = () => {
  let pathArray = window.location.pathname.split('/');
  let id = pathArray[3];
  return(
    <div className={styles.component}>
      <h2>Event VIEW</h2>
      <span>{id}</span>
    </div>
  );
};

export default Event;
