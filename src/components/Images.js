import React from 'react';

export default function Images(props){
    return(
        <div className="card" style={{width:'18rem',marginTop:'20px'}}>
  <img src="https://bit.ly/3CgEmzc" className="card-img-top" alt="..."/>
  <div className="card-body" style={{backgroundColor:props.mode==='black'?'rgb(25 23 52)':'white',color:props.mode==='black'?'white':'rgb(25 23 52)'}}>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger">Go somewhere</a>
  </div>
</div>
    )
}