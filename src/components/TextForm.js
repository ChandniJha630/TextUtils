import React, { useState } from 'react'

export default function TextForm(props) {

  const buttonstyle=({
    margin:5,
  })

  const handleOnChange =(event) =>{
    SetText(event.target.value);
  
}
    const handleUpClick=()=>{
        let newText=Text.toUpperCase();
        SetText(newText);
    }
    const handleDownClick=()=>{
      let newText=Text.toLowerCase();
      SetText(newText);
  }
 const copyText=()=>{
  let mytext=document.getElementById("textarea");
  mytext.select();
  navigator.clipboard.writeText(mytext.value);
}
const cutText=()=>{
  let mytext=document.getElementById("textarea");
  mytext.select();
  navigator.clipboard.writeText(mytext.value);
  SetText('');
}



  const ClearClick=()=>{
    let newText=' ';
    SetText(newText);
  }
  /*
  const [myStyle,setMyStyle]=useState({
    color:'white',
    backgroundColor:'black'
  })
  const [btnText,setBtnText]=useState("Enable Dark Mode")
  const ThemeModes=()=>{
  if(myStyle.color=='white'){
    setMyStyle({
      color:'black',
        backgroundColor:'white'

    })
    setBtnText("Enable Dark Mode");
  }
    else{
      setMyStyle({
        color:'white',
          backgroundColor:'black'
      })
      setBtnText("Enable Light Mode");
    } 
  }*/
   
    const [Text,SetText] = useState('Enter text here');

  return (
    
    <div style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}> 
    <div className="container" style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
      <div className="  mb-3 ">
  <label for="exampleFormControlTextarea1" className="form-label"> <h1>Text Here</h1> </label>
  <textarea className="form-control" id="textarea" value={Text} style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="10" ></textarea>
</div>
<button className="btn btn-secondary " style={buttonstyle} onClick={handleUpClick}>ABC</button>
<button className="btn btn-secondary " style={buttonstyle} onClick={handleDownClick}>abc</button>
<button className="btn btn-secondary  " style={buttonstyle} onClick={ClearClick}><i class="fa fa-paint-brush" aria-hidden="true"></i>Clear</button>
<button className="btn btn-secondary  " style={buttonstyle}  onClick={copyText} ><i class="fa fa-clone" aria-hidden="true"></i></button>
<button className="btn btn-secondary  " style={buttonstyle} onClick={cutText} ><i class="fa fa-scissors" aria-hidden="true"></i></button>


<h1>Input Summary</h1>
<p>{Text.split(" ").length} words and {Text.length} characters</p>
<h1>Preview</h1> 
<p>{Text}</p>
    </div>
    </div>
  )

}