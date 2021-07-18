import React from 'react'

import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard'

import { Grid, Paper } from '@material-ui/core'

function Profile () {

  document.body.style.backgroundColor = '#132433'
  
  return (
    <div>
      <NavBar/>
      <ProfileCard/>
    </div>
  )
}

export default Profile;