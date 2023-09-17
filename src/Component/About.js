import React,{useState} from 'react'

export default function About(props) {
// const [myStyle , setmyStyle]=useState({
//     color:"black",
//     backgroundColor:"white"
// })
// const [btnText, setbtnText]=useState("Enable dark mode")  
// const handleDark=()=>{
//     if(myStyle.color==="black"){
//         setmyStyle({
//             color:"white",
//             backgroundColor:"black",
         
//         })
//         setbtnText("Enable light mode")

//     }
//     else{
//         setmyStyle({
//             color:"black",
//             backgroundColor:"white"
//         })
//         setbtnText("Enable dark mode")
//     }
// }
let myStyle={
  color : props.mode==='dark'?'white':'#042743',
  backgroundColor : props.mode==='dark'?'#042743':'white',
  border: '2px solid',
  borderColor: props.mode==='dark'?'white':'#042743',

}





  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3 '>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={myStyle} >
      <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  {/* <button className="btn btn-primary mx-2 my-3" onClick={handleDark}  >{btnText}</button> */}

</div>
    </div>
  )
}
