import React from 'react';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import {bookings, events} from '../Tables/Tables';

import {utils} from '../../../utils/utils';


const Homepage = () => {
  const [spacing] = React.useState(2);
  return(
    <Paper className={styles.component}>
      <Typography className={styles.head}>
        BOOKINGS and EVENTS for TODAY!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {bookings.map(book => (
              <Grid key={book} item>
                <Card >
                  <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                      <p>Table: {book.table}</p>
                      <p>Hours: {utils.numberToHour(book.start) + ' - ' + utils.numberToHour(book.start + book.length)}</p>
                      <p>Persons: {book.persons}</p>
                      <p>Notes:</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {events.map(event => (
              <Grid key={event} item>
                <Card >
                  <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                      <p>Event number: {event.id}</p>
                      <p>Table: {event.table}</p>
                      <p>Hours: {utils.numberToHour(event.start) + ' - ' + utils.numberToHour(event.start + event.length)}</p>
                      <p>Persons: {event.persons}</p>
                      <p>Notes:</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Homepage;
