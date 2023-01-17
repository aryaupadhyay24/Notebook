import React from 'react'
import Addnote from './Addnote'
import Note from './Note'

const Home = (props) => {
  const {showAlert}=props;
  
  
  return (
    <div>
        <Addnote showAlert={showAlert}/>
        <Note showAlert={showAlert}/>
    </div>
  )
}

export default Home
