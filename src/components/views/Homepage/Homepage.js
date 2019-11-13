import React from 'react';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import {utils} from '../../../utils/utils';

let hourObject = [];

const bookings = [
  {id: '1', date: '20.11.2019', length: 3, persons: 2, table: 2, start: 12},
  {id: '2', date: '20.11.2019', length: 2, persons: 4, table: 6, start: 15},
  {id: '3', date: '20.11.2019', length: 4, persons: 7, table: 1, start: 17},
  {id: '4', date: '20.11.2019', length: 2, persons: 3, table: 5, start: 12},
];

const tables = ['table1', 'table2', 'table3', 'table4', 'table5', 'table6'];

const renderHours = () => {
  hourObject = [];
  let indexCounter = 0; //variable to find correct hourObject array index
  for(let a=12; a<24; a=a+0.5){
    const hours = {};
    hours['hour'] = a;
    hourObject.push(hours);
    for(let book of bookings){
      let bookDuration = book.length + book.start;
      if(a >= book.start && a < bookDuration){
        const tableNumber = 'table' + book.table; //variable to set table number key
        hourObject[indexCounter][tableNumber] = book;
      }
    }
    indexCounter ++;
  }
};

const Homepage = () => {
  return(
    <Paper className={styles.component}>
      <Table className={styles.tab}>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderHours()}
          {hourObject.length ? hourObject.map(hour => (
            <TableRow key={hour.id}>
              <TableCell className={styles.cell}>
                {utils.numberToHour(hour.hour)}
              </TableCell>
              {tables.map(tableNum => (
                <TableCell key={tableNum.id} className={styles.cell}>
                  {hour[tableNum]
                    ? <Button className={styles.but} variant="contained" color="primary">BOOKED id {hour[tableNum].id}</Button>
                    : <Button className={styles.but} variant="contained" >FREE</Button>}
                </TableCell>
              ))}
            </TableRow>
          )) : '' }
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Homepage;
