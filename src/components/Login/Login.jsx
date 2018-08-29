import React from 'react';
import InputEntry from '../Input/Input';


const Login = ( props ) => {
    return( <div>
        <label  >
            < InputEntry  inputField="Enter Name" />
            < InputEntry  inputField="Enter Password" />
        </label>
    </div> )
}

export default Login;

