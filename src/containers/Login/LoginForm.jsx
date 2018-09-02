import React from 'react';
import { Field } from 'redux-form'; 
import { Button } from 'semantic-ui-react';
import InputEntry from '../../components/Input/Input';



const LoginForm = ( props ) => {


    return(
        <form onSubmit={ props.onSubmit } >
            < Field className = "" component={ InputEntry}   />
            < Field className = "" component={ InputEntry}    /> 
        </form>


    )
}


export default LoginForm;