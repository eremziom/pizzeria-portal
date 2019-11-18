import React from 'react';
//import styles from './Booking.module.scss';
import {bookings} from '../Tables/Tables';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {utils} from '../../../utils/utils';

const Booking = () => {
  let pathArray = window.location.pathname.split('/');
  let bookId = pathArray[4];

  return(
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Booking number: {bookId}
        </Typography>
        {console.log(bookings)}
        {bookings.map(book => (
          <Typography key={book.id}>
            {book.id === bookId ?
              <>
                <p>{'Date: ' + book.date}</p>
                <p>{'Persons: ' + book.persons}</p>
                <p>{'Table: ' + book.table}</p>
                <p>{'Hours: ' + utils.numberToHour(book.start) + ' - ' + utils.numberToHour(book.start + book.length)}</p>
              </> : ''}
          </Typography>
        ))}
        <Typography>
          NOTES:
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
};

export default Booking;
