import React from 'react';
import styles from './Order.module.scss';

const Order = () => {
  let pathArray = window.location.pathname.split('/');
  let id = pathArray[4];

  return(
    <div className={styles.component}>
      <h2> Order by ID VIEW</h2>
      <span>{id}</span>
    </div>
  );
};

export default Order;
