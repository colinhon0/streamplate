import React from 'react'

import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard'

import '../style/page.css'

import { Grid, Paper } from '@material-ui/core'

function Profile () {

  document.body.style.backgroundColor = '#132433'
  
  return (
    <div style = {{   minWidth: '100%', minHeight: '100%', position:'fixed'}}>
      <NavBar/>
      <div className = 'page'>
        <ProfileCard/>
      </div>
    </div>
  )
}

export default Profile;