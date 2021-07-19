import React from 'react';

import EmailInput from '../components/EmailInput'
import PhoneInput from '../components/PhoneInput'
import NameInput from '../components/NameInput'

import { Grid, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Redirect } from 'react-router-dom'

function Alert (props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}


const paperStyle = { padding: '5px', width: '60vh', margin: '20px auto', display: 'flex', flexDirection: 'column'}

export default function EditCard() {

  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [img, setImg] = React.useState('https://media.csesoc.org.au/content/images/2021/01/92174391_1408417722696600_2578155957393555456_n---Colin-Hon.jpg')
  const [open, setOpen] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  document.body.style.backgroundColor = '#132433'
  
  React.useEffect( () => {
    if (localStorage.getItem("img") !== null) {
      setImg(localStorage.getItem("img"))
    }
  }, []);
  
  const saveChanges = () => {
    let valid = true
    // Check input
    if (!firstName.match(/^[A-Z]+$/i)) {
      valid = false
    }
    
    if (!lastName.match(/^[A-Z]+$/i)) {
      valid = false
    }
    
    if (valid) {
      localStorage.setItem("img", img);
      localStorage.setItem("name", firstName + ' ' + lastName);
      localStorage.setItem("number", number);
      localStorage.setItem("email", email);
      setSaved(true);
    } else {
      setOpen(true)
    }
  }
  
  const close = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }
  
  if (saved) {
    return (<Redirect to = '/' />);
  }
  
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle} padding={0}>
        <Typography variant ='h3'> Edit Profile</Typography>
        <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        
          <div style = {{ display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img className="edit-container" src={img} alt = 'https://media.csesoc.org.au/content/images/2021/01/92174391_1408417722696600_2578155957393555456_n---Colin-Hon.jpg' />
              <Fab component="label" size="small">
                <AddPhotoAlternateIcon />
                <input type="file" accept=".png, .jpeg" onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} hidden/>
              </Fab>
          </div>
          
          <div style={{ display:'flex', flexDirection:'column', padding: '40px'}} >
            <NameInput
              value = {firstName}
              onChange = {e => setFirstName(e.target.value)}
              label = "First Name"
            />
            <NameInput
              value = {lastName}
              onChange = {e => setLastName(e.target.value)}
              label = "Last Name"
            />
            <EmailInput 
              value = {email}
              onChange = {e => setEmail(e.target.value)}
            />
            <PhoneInput
              value = {number}
              onChange = {e => setNumber(e.target.value)}
            />
          </div>
          
        </div>
        <Button variant="contained" color="primary" onClick={() => saveChanges()}>
          Save Changes
        </Button>
        
        <Snackbar open={open} autoHideDuration={5000} onClose={close}>
          <Alert onClose={close} severity="error"> Name must contain only alphabetic characters </Alert>
        </Snackbar>
      </Paper>
    </Grid>
  )
}