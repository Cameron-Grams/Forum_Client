import React from 'react';
import { Field, reduxForm } from 'redux-form'; 
import { Button } from 'semantic-ui-react';
// import InputEntry from '../../components/Input/Input';

let LoginForm = ( props ) => {
    return(
        <form onSubmit={ props.handleSubmit } >
            <div>< Field className = "inputField" name="loginUserName" component={ "input" }  placeholder="Enter Email" /></div>
            <div>< Field className = "inputField" name="loginUserPassword" component={ "input" } placeholder="Enter Password"   /></div>
            <Button className="submitButton" type="submit" >Log In</Button>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'loginForm'
})( LoginForm );

export default LoginForm;