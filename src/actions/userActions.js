import * as actionTypes from './actionTypes';
import ENDPOINT from '../config/config'; 



export function SendLogin( values ){
    const promise = fetch( 
        `${ ENDPOINT }/api/users/logon`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( values )
        }
    )

};




