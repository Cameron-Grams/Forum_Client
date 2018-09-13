import * as actionTypes from '../actions/actionTypes'; 



const initialState = {
    userId: null,
    userName: null,
    userLastLogon: null
}

const UserReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case actionTypes.register:{
            console.log( "user reducer returned registration with: ", action.data.message ); 
            return{
                ...state
            }
        }

        case actionTypes.registerFail:{
            console.log( "user reducer registration failure with: ", action.data );
            return{
                ...state
            }
        }

        case actionTypes.login:{
            console.log( 'user reducer with returned action: ', action.data ); 
            return {
                ...state,
                userName: action.data.userName,
                userId: action.data.userId,
                userLastLogin: new Date()
            }
        }

        case actionTypes.loginFail:{
            console.log( 'user reducer error ', action.error );
            return{
                ...state
            }
        }
            
                
        default:
            return{
                ...state
            }
    }


}

export default UserReducer; 