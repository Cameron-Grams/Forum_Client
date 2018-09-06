import * as actionType from '../actions/actionTypes'; 

const initialState = {
    functionsCalled: 0
}


const AppStateReducer = ( state = initialState, action ) => {
    switch ( action.type) {
        
        case actionType.registerRequest:
        case actionType.loginRequest:
        case actionType.actionCalled:{
            return{
                ...state,
                functionsCalled: state.functionsCalled + 1
            }
        }

        default:
            return{
                ...state
            }
    }
}

export default AppStateReducer; 