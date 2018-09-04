import React from 'react';
import { Field, reduxForm } from 'redux-form'; 
import { Button } from 'semantic-ui-react';
import InputEntry from '../../components/Input/Input';

let LoginForm = ( props ) => {
    return(
        <form onSubmit={ props.handleSubmit } >
            < Field className = "" name="loginUserName" component={ InputEntry}   />
            < Field className = "" name="loginUserPassword" component={ InputEntry}    /> 
            <Button className="submitButton" type="submit" >Log In</Button>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'loginForm'
})( LoginForm );

export default LoginForm;