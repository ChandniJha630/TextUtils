
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,  {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom"

function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setalert('you have enabled dark mode');
     document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      setalert('you have disabled dark mode');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }

  }
  const[alert,setalert]=useState('Welcome To My Text Utility Website');
  return (
<Router>
<Navbar mode={mode} toggleMode={toggleMode}/> 
<Alert alertmessage={alert}/>
<Routes>
      <Route path="/" element={<TextForm mode={mode}/>}></Route>
      <Route path="/about" element={<About mode={mode}/>}></Route>
    </Routes>
</Router>

  );
}

export default App;
