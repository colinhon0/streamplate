import React from 'react';

import '../style/ProfileCard.css'

import { Grid, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

export default function ProfileCard() {
    
  const [name, setName] = React.useState('Default Name')
  const [email, setEmail] = React.useState('default@email.com')
  const [number, setNumber] = React.useState('0430590412')
  const [img, setImg] = React.useState('https://media.csesoc.org.au/content/images/2021/01/92174391_1408417722696600_2578155957393555456_n---Colin-Hon.jpg')
  
  const nameStored = localStorage.getItem("name")
  const emailStored = localStorage.getItem("email")
  const numberStored = localStorage.getItem("number")
  const imgStored = localStorage.getItem("img")
  
  if (nameStored !== null) {
    setName(nameStored)
  }
  
  if (emailStored !== null) {
    setName(emailStored)
  }
  
  if (numberStored !== null) {
    setName(numberStored)
  }
  
  if (imgStored !== null) {
    setName(imgStored)
  }
  
  const paperStyle = { padding: 0, height: '70vh', width: '50vw', margin: '20px auto' }

  return (
    <Grid align = 'center'>
      <Paper elevation={20} style={paperStyle} padding={0}>
        <div className="upper-container">
          <div className="profile-container">
            <img className="img-container" src={img} alt = '' height="100px" width="100px" />
          </div>
        </div>
        <div className="lower-container">
          <Typography variant="h3"> {name} </Typography>
          <Typography variant="h5"> {email} </Typography>
          <Typography variant="h5"> {number} </Typography>
        </div>
      </Paper>
    </Grid>
  );
}