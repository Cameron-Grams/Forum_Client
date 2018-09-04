import React from 'react';
import { connect } from 'react-redux'; 
import { sendLogin } from '../../actions/userActions'; 
import LoginForm from './LoginForm'; 
import './Login.css'; 

const Login = ( props ) => {

    const sendLogin = ( values ) => {
        console.log( "Login Form with values: ", values ); 
        props.sendLogin( values );
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

const mapStateToProps = ( state ) => ( {
  user: state.user
} )

export default connect( mapStateToProps, { sendLogin } )( Login );

