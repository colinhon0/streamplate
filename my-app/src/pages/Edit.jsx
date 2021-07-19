import React from 'react'
import NavBar from '../components/NavBar'
import EditCard from '../components/EditCard'
import '../style/page.css'

function Edit () {
  return (
    <div style = {{   minWidth: '100%', minHeight: '100%', position:'fixed'}}>
      <NavBar currentPage='edit'/>
      <div className='page'>
        <EditCard />
      </div>
    </div>
  )
}

export default Edit;