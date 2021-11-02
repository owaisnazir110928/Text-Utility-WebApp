import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
          }

       const handleLowClick= ()=>{
         let newText=text.toLowerCase();
         setText(newText);
          }
       const handleClick= ()=>{
        setText("");
          }
      const handleExSpaces= ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success");
      }

      const handleCopy =()=>{
        navigator.clipboard.writeText(text);
         props.showAlert("Copied To Clipboard","success");
      }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const[text,setText] = useState("");
    
  return (
<>
     <div className="container my-2"  style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}}> 
     <h1>{props.heading}</h1>
            <div className="my-2">
            <label htmlFor="mybox" className="form-label"></label>
            <textarea className="form-control " value={text}   style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >UPPERCASE</button>
    <button disabled={text.length===0}  className="btn btn-warning  mx-1 my-1" onClick={handleLowClick}>LOWERCASE</button>
    <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleClick} >CLEAR</button>
    <button disabled={text.length===0}  className="btn btn-info  mx-1 my-1" onClick={handleCopy} >COPY</button>
    <button disabled={text.length===0}  className="btn btn-secondary mx-1 my-1" onClick={handleExSpaces} >REMOVE EX SPACES</button>
    </div>
    <div className="container my-3"  style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}}>
      <h2>Your Text Sumarry</h2>
      <p>This has <b>{text.split(/\s+/).filter((element)=>{return  element.length!==0}).length} </b> words and <b>{text.length}</b> characters </p>
      <p><b>{0.008*60*text.split(/\s+/).filter((element)=>{return  element.length!==0}).length}</b> Seconds to read</p>
      <h2 className="my-2">Preview</h2>
      <p className="my-2">{text.length>0?text:"NOTHING TO PREVIEW"}</p>
    </div>
    </>
  )
}
 