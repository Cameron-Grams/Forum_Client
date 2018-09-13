import * as actionTypes from './actionTypes';
import { ENDPOINT } from '../config/config'; 

export function sendRegistration( values ){
    return dispatch => {
        dispatch( registrationRequest() );

        return fetch(
            `${ ENDPOINT }/api/users/register`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( values )
            }
        )
    }
}

export function sendLogin( values ){
    return dispatch => {

        dispatch( loginRequest() );

        return fetch( 
        `${ ENDPOINT }/api/users/login`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( values )
        }
    )
    .then( res => res.json() )
    .then( response => {
        console.log( 'user actions with response: ', response ); 
        dispatch( loginSuccess( response ) )
    } )
    .catch( err => {
        dispatch( loginFailure( err.message ) ) 
    })
    }
};

const loginRequest = () => ( {
    type: actionTypes.loginRequest
})

const loginSuccess = ( user => ( {
    type: actionTypes.login,
    data: {
        ...user
        }
    })
)

const loginFailure = ( error => ({
    type: actionTypes.loginFail,
    data: {
        error
    }
    })
)
