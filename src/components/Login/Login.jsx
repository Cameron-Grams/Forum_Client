import React from 'react';
import InputEntry from '../Input/Input';
import './Login.css'; 
import { Button } from 'semantic-ui-react';





const Login = ( props ) => {
    return( 
    <div className="outerShellDiv">   
    <div className="insetDiv" >
      <div>  
        <h2>Enter Name and Password to join Forum</h2>
      </div>
      <div>  
        < InputEntry  inputField="Enter Name" />
        < InputEntry  inputField="Enter Password" />
      </div>
      <div><Button>Submit</Button></div>
    </div> 
    </div>
    )
}

export default Login;

