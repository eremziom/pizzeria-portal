import React from 'react';
//import styles from './Event.module.scss';
import {events} from '../Tables/Tables';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {utils} from '../../../utils/utils';

const Event = () => {
  let pathArray = window.location.pathname.split('/');
  let bookId = pathArray[4];
  console.log(bookId);

  return(
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Event number: {bookId}
        </Typography>
        {console.log(events)}
        {events.map(book => (
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

export default Event;
