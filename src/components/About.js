import React from 'react'

export default function About(props) {

  return (
        <div style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}} className="container my-10">
        <h1 className="my-3">About us</h1>
    <div className="accordion" style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}} id="accordionExample" >
<div style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}}  className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
    <button style={{backgroundColor:props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        HELP & SUPPORT
    </button>
    </h2>
    <div style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}} id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong> Explicabo facere reiciendis animi consequuntur dignissimos ipsa tempore odio eligendi aperiam nostrum? Fuga nam laboriosam vel commodi, accusamus consequuntur <code>error veniam</code> expedita.
    </div>
    </div>
</div>
<div style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}} className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
    <button style={{backgroundColor:props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        CAMPUSES
    </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong> Explicabo facere reiciendis animi consequuntur dignissimos ipsa tempore odio eligendi aperiam nostrum? Fuga nam laboriosam vel commodi, accusamus consequuntur <code>error veniam</code> expedita.
    </div>
    </div>
</div>
<div style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}} className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
    <button style={{backgroundColor:props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        FAQs
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong> Explicabo facere reiciendis animi consequuntur dignissimos ipsa tempore odio eligendi aperiam nostrum? Fuga nam laboriosam vel commodi, accusamus consequuntur <code>error veniam</code> expedita.
    </div>
    </div>
</div>
</div></div>
  )
}
