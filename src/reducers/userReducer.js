import * as actionTypes from '../actions/actionTypes'; 



const initialState = {
    userId: null,
    userName: null,
    userLastLogon: null
}

const UserReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.logon:
            
            break;
    
        default:
            break;
    }


}

export default UserReducer; 