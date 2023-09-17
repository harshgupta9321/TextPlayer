import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Text has converted to Uppercase", "success")
  }
  const handleLowClick = () => {

    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Text has converted to Lowercase", "success")

  }
  const handleReset = () => {

    let newText = ""
    setText(newText)
    props.showAlert("TextBox has reset", "success")

  }
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value)
  }
  const handleCopy = () => {
    // let text = document.getElementById("exampleFormControlTextarea1")
    // text.select();
    navigator.clipboard.writeText(text)
    // document.getSelection().removeAllRanges();
    props.showAlert("Text has copied", "success")

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed", "success")


  }
  const handleAddExtraSpaces = () => {
    let newText = text.split(/[]*/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces are added", "success")

  }

  const [text, setText] = useState('');


  return (
    <>
      <div className="container">

        <h1 className='my-3' style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
          {props.heading}
        </h1>
        <div className="mb-3">

          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? '#042743' : 'white' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReset} >Reset</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleAddExtraSpaces} >Add Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h1 style={{ color: props.mode === 'light' ? '#042743' : 'white' }}> Your Text Summary </h1>
        <p style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2 style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>Preview</h2>
        <p style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{text.length > 0 ? text : "Nothing to preview !"}</p>
      </div>
    </>
  )
}
