import React from 'react';
import styles from './Kitchen.module.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

//import demoOrders from '../../../data/orders';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';


const demoOrders = [
  {
    id: 1,
    table: 2,
    menu: {
      drinks: 'cola',
      main: 'pizza',
      options: {
        pan: 'thin',
        sauce: 'tomato',
        addings: ['olives', 'rucola', 'salami'],
      },
    },
    price: '24$',
    dest: 'local',
  },
  {
    id: 2,
    table: 4,
    menu: {
      drinks: 'tea',
      main: 'pasta',
      options: {
        kind: 'spaghetti',
        sauce: 'white',
        addings: ['olives', 'becon'],
      },
    },
    price: '18$',
    dest: 'away',
  },
];

const showOptions = (order) => {
  if(order.menu.main === 'pizza'){
    return (
      'Pan: ' + order.menu.options.pan
    );
  }

  if(order.menu.main === 'pasta'){
    return (
      'Kind: ' + order.menu.options.kind
    );
  }
};

const showAddings = (order) => {
  const addings = order.menu.options.addings.join(', ');
  return addings;
};

const Kitchen = () => {
  const [spacing] = React.useState(2);

  return(
    <div className={styles.component}>
      <h2>KITCHEN</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {demoOrders.map(order => (
              <Grid key={order} item>
                <Card className={styles.card}>
                  <CardContent>
                    <p>Order ID: {order.id}</p>
                    <p>Table: {order.table}</p>
                    <p>Drinks: {order.menu.drinks}</p>
                    <p>Main: {order.menu.main}</p>
                    <p>{showOptions(order)}</p>
                    <p>Sauce: {order.menu.options.sauce}</p>
                    <p>Addings: {showAddings(order)}</p>
                    <p>Price: {order.price}</p>
                    <p>Destination: {order.dest}</p>
                  </CardContent>
                  <CardActions>
                    <Switch
                    /><span>REALIZED</span>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Kitchen;
