import React, { useState } from 'react'

export default function textForm(props) {

  const buttonstyle=({
    margin:5,
  })

  const handleOnChange =(event) =>{
    setText(event.target.value);
  
}
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleDownClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
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
  setText('');
}



  const ClearClick=()=>{
    let newText=' ';
    setText(newText);
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
   
    const [text,setText] = useState('Enter text here');

  return (
    
    <div style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}> 
    <div className="container" style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
      <div className="  mb-3 ">
  <label for="exampleFormControlTextarea1" className="form-label"> <h1>Text Here</h1> </label>
  <textarea className="form-control" id="textarea" value={text} style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="10" ></textarea>
</div>
<button className="btn btn-secondary " style={buttonstyle} onClick={handleUpClick}>ABC</button>
<button className="btn btn-secondary " style={buttonstyle} onClick={handleDownClick}>abc</button>
<button className="btn btn-secondary  " style={buttonstyle} onClick={ClearClick}><i class="fa fa-paint-brush" aria-hidden="true"></i>Clear</button>
<button className="btn btn-secondary  " style={buttonstyle}  onClick={copyText} ><i class="fa fa-clone" aria-hidden="true"></i></button>
<button className="btn btn-secondary  " style={buttonstyle} onClick={cutText} ><i class="fa fa-scissors" aria-hidden="true"></i></button>


<h1>Input Summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<h1>Preview</h1> 
<p>{text}</p>
    </div>
    </div>
  )

}