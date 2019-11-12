import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const Login = () => {
  return(
    <Paper className={styles.component}>
      <div>
        <TextField
          label="Login"
          placeholder="enter your login"
          margin="dense"
          fullWidth
        />
      </div>
      <div>
        <TextField
          label="Pasword"
          placeholder="enter your pasword"
          margin="dense"
          fullWidth
        />
      </div >
      <div>
        <Button className={styles.button} variant="contained" color="primary">
          login
        </Button>
      </div>
    </Paper>
  );
};

export default Login;
