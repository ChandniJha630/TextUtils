import React from 'react'

export default function About(props) {
  return (
    < div style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
    <div className="container" style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
        <h1>About Us</h1>
      <p>This is a website where you can format text and get count of words and characters.</p>
      <ul>
        <li>Word Count</li>
        <li>Character Count</li>
        <li>Capitalise</li>
        <li>Lower Case</li>
      </ul>
      <br />
      <button className="btn btn-secondary"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email Us</button>
    </div>
    
    </div>
  )
}
