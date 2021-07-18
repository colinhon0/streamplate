import React from 'react';

import EditImage from '../components/EditImage'
import EditProfile from '../components/EditProfie'

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


const paperStyle = { padding: '5px', height: '80vh', width: '90vw', margin: '20px auto', display: 'flex', flexDirection: 'column'}

export default function EditCard() {

  const classes = useStyles();

  document.body.style.backgroundColor = '#132433'
  
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle} padding={0}>
        <Typography variant ='h3'> Edit Profile</Typography>
        <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <EditImage />
          <EditProfile />
        </div>
      </Paper>
    </Grid>
  )
  
  /*return (
    <Grid align = 'center'>
      <Paper elevation={20} style={paperStyle} padding={0}>
        <Typography variant='h4'> Edit Profile </Typography>
        
        <Button variant="contained" component="label">
          Image Upload
          <input type="file" hidden/>
        </Button>
        
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
        
      </Paper>
    </Grid>
  )*/
}