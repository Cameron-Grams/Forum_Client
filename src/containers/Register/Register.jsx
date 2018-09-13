import React from 'react';
import { connect } from 'react-redux'; 
import { sendRegistration } from '../../actions/userActions'; 

import RegisterForm from './RegisterForm'; 
import './Register.css'; 





const Register = ( props ) => {

    const sendRegistration = ( values ) => {
        console.log( "Register Form with values: ", values ); 
        props.sendRegistration( values ); 
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

const mapStateToProps = ( state ) => ( {
  user: state.user
})

export default connect( mapStateToProps, { sendRegistration } )( Register );

