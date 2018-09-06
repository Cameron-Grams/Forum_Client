import React from 'react';
import { Field, reduxForm } from 'redux-form'; 
import { Button } from 'semantic-ui-react';
import InputEntry from '../../components/Input/Input';

let RegisterForm = ( props ) => {
    return(
    <div>
        <form onSubmit={ props.onSubmit } >
            < Field className = "registerInput" component={ InputEntry}   />
            < Field className = "registerInput" component={ InputEntry}    /> 
        </form>
        <Button className="submitButton" type="submit" >Register</Button>
    </div>
    )
}

RegisterForm = reduxForm({
    form: 'registerForm'
})( RegisterForm );

export default RegisterForm;