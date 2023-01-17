
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import NoteState from './components/context/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';




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
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home showAlert={showAlert}/>} />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/signup" element={<Signup showAlert={showAlert}/>} />


        </Routes>

      </div>
    </NoteState>
  );
}

export default App;
