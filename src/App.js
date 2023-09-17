// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alert, setAlert]=useState(null);

  const showAlert=(message , type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)

  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor='#042742'
      showAlert("Dark mode is enabled", "success")
      document.title="TextEditor- dark"
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled","success")
      document.title="TextEditor- light"



    }
  }
  return (
    <>
  <Router>
    <Navbar title="textEditor" about="About us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}  />
   <div className="container my-3">
      <Routes>
        <Route exact strict path="/" element={<Textform showAlert={showAlert} heading="Enter text below" mode={mode} />} />
        <Route exact strict path="/about" element={<About />} />
      </Routes>
      
   </div>
  </Router>

      

   
 
  </>
  );
}

export default App;
