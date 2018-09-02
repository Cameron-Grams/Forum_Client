import React from 'react';
import LoginForm from './LoginForm'; 
import './Login.css'; 





const Login = ( props ) => {

    const sendLogin = ( values ) => {

    }


    return( 
    <div className="outerShellDiv">   
    <div className="insetDiv" >
      <div>  
        <h2>Enter Name and Password to join Forum</h2>
      </div>

      < LoginForm onSubmit={ sendLogin } />
      
    </div> 
    </div>
    )
}

export default Login;

