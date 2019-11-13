import React from 'react';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

//import {utils} from '../../../utils/utils';


const bookings = [
  {id: '1', date: '20.11.2019', length: 3, persons: 2, table: 2, start: 12},
  {id: '2', date: '20.11.2019', length: 2, persons: 4, table: 6, start: 15},
  {id: '3', date: '20.11.2019', length: 4, persons: 7, table: 1, start: 17},
  {id: '4', date: '20.11.2019', length: 2, persons: 3, table: 5, start: 12},
];

const events = [
  {id: '1', date: '20.11.2019', length: 3, persons: 4, table: 3, start: 20, event: true},
  {id: '2', date: '20.11.2019', length: 3, persons: 4, table: 4, start: 20, event: true},
];



const Homepage = () => {
  const [spacing] = React.useState(2);
  return(
    <Paper className={styles.component}>
      <Typography>
        BOOKINGS and EVENTS for TODAY!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {bookings.map(value => (
              <Grid key={value} item>
                <Card >
                  <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                      Word of the Day
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
            {events.map(value => (
              <Grid key={value} item>
                <Card >
                  <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                      Word of the Day
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
