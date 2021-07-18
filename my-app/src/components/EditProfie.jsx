import React from 'react';

import { Grid, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function EditProfile () {
  
  const classes = useStyles();
  
  return (
   <div style={{ display:'flex', flexDirection:'column', padding: '40px'}}>
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="input-with-icon-adornment">First Name</InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
    
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="input-with-icon-adornment">Last Name</InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
    
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="input-with-icon-adornment">Phone Number</InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
    
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
    
    <Button variant="contained" color="primary">
      Save Changes
    </Button>
   </div>
  )
}