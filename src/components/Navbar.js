import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (

    <> <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
 <div className="container-fluid my-2">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link"  aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  aria-current="page" to="/Images" >Images</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "to="/SignUp">Sign Up</Link>
        </li>    </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
</div>
  
    </div>
  </div>
</nav>
  </>
  )
}
Navbar.propTypes = {
    title : PropTypes.string
}