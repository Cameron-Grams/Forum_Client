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
        .then( res => res.json() )
        .then( response => {
            console.log( "user action registration response: ", response )
            dispatch( registrationSuccess( response ) )
        }
        )
        .catch( err => {
            console.log( "user actions with registration failure: ", err );
            dispatch( registrationFailure( err ) )
        })
    }
}

const registrationRequest = () => ( {
    type: actionTypes.registerRequest 
} )

const registrationSuccess = user => ( {
    type: actionTypes.register,
    data: {
        ...user
    }
} )

const registrationFailure = user => ( {
    type: actionTypes.registerFail,
    data: {
        ...user
    }
} )

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
