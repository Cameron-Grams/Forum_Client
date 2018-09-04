import React from 'react';
import RegisterForm from './RegisterForm'; 
import './Register.css'; 





const Register = ( props ) => {

    const sendRegistration = ( values ) => {
        console.log( "Register Form with values: ", values ); 
    }


    return( 
    <div className="outerShellDiv">   
      <div className="insetDiv" >
        <div>  
          <h2>Enter Name, Password and User Information to join Forum</h2>
        </div>

        < RegisterForm onSubmit={ sendRegistration } />
        
      </div> 
    </div>
    )
}


export default Register;

