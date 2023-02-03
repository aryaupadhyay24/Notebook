
import './App.css';

import { Routes, Route } from "react-router-dom";

import NoteState from './components/context/NoteState';

import { useState } from 'react';
import AddStudent from './components/AddStudent/AddStudent';
import ManageStudent from './components/ManageStudent/ManageStudent';
import Sidebar from './components/sidebar/Sidebar';




function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {

    setAlert({

      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <NoteState>
      {/* <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home showAlert={showAlert}/>} />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/signup" element={<Signup showAlert={showAlert}/>} />


        </Routes>


      </div> */}
      <div className="wrapper">
        <div className="contain">
          <div className="sidebar2">
            <Sidebar/>
          </div>
          <div className="maincontent">
            <Routes>
              <Route path="/" element={<AddStudent/>} />
              <Route path="/manage" element={<ManageStudent />} />
            </Routes>
          </div>
        </div>
      </div>


    </NoteState>
  );
}

export default App;
