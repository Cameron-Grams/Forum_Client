import * as actionTypes from '../actions/actionTypes'; 



const initialState = {
    userId: null,
    userName: null,
    userLastLogon: null
}

const UserReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.logon:{
            return {
                ...state,
                userName: action.data.userName,
                userId: action.data.userId,
                userLastLogon: new Date()
            }

        }
            
                
        default:
            return{
                ...state
            }
    }


}

export default UserReducer; 