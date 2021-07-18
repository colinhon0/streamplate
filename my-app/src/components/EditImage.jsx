import React from 'react';

import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

export default function EditImage () {

  const [img, setImg] = React.useState('https://media.csesoc.org.au/content/images/2021/01/92174391_1408417722696600_2578155957393555456_n---Colin-Hon.jpg')
  
  return (
   <div style = {{ display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <img className="img-container" src={img} alt = '' />
      <Fab component="label">
        <AddPhotoAlternateIcon />
        <input type="file" accept=".png, .jpeg" onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} hidden/>
      </Fab>
   </div>
  )
}