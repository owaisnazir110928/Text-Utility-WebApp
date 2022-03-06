import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import SignUp from './components/SignUp';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
 const[mode,setMode]= useState('light');
 const[alert,setAlert]= useState(null);
 
const showAlert =(message,type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
        setAlert(null)
    }, 2000);
}
 const toggleMode= ()=>{
   if(mode === 'light'){
     setMode('black');
     document.body.style.backgroundColor='rgb(25 23 52)';
     showAlert("Dark Mode Enabled","success")
    ;
   }
   else{
     setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("Light Mode Enabled","success")
    }
 }
    return (

<>
<Router>  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
    <div className="container">
   <Switch>
   <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/SignUp">
            <SignUp mode={mode}/>
          </Route>
          <Route react path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text Below To Use" mode={mode}/>
          </Route>    
</Switch></div></Router>

</>);

}

export default App;
