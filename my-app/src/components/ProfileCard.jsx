import React from 'react';

import '../style/ProfileCard.css'

import { Grid, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

export default function ProfileCard() {
    
  const [name, setName] = React.useState('Default Name')
  const [email, setEmail] = React.useState('default@email.com')
  const [number, setNumber] = React.useState('0430590412')
  const [img, setImg] = React.useState('https://media.csesoc.org.au/content/images/2021/01/92174391_1408417722696600_2578155957393555456_n---Colin-Hon.jpg')
  
  const nameStored = localStorage.getItem("name")
  const emailStored = localStorage.getItem("email")
  const numberStored = localStorage.getItem("number")
  const imgStored = localStorage.getItem("img")
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  
  React.useEffect(() => {
    if (nameStored !== null) {
      setName(nameStored)
    }
    
    if (emailStored !== null) {
      setEmail(emailStored)
    }
    
    if (numberStored !== null) {
      setNumber(numberStored)
    }
    
    if (imgStored !== null) {
      setImg(imgStored)
    }
  }, []); 
  
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
          <ThemeProvider theme={theme}>
            <Typography variant="h3"> {name} </Typography>
            <Typography variant="h5"> {email} </Typography>
            <Typography variant="h5"> {number} </Typography>
          </ThemeProvider>
        </div>
      </Paper>
    </Grid>
  );
}