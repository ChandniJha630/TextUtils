
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,  {useState} from 'react';
import Alert from './components/Alert';


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
    <>
<Navbar mode={mode} toggleMode={toggleMode}/> 
<Alert alertmessage={alert}/>
<TextForm mode={mode}/>
  </>
 
  );
}

export default App;
