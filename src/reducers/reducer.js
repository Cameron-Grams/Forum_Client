import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AppStateReducer from './appStateReducer'; 
import UserReducer from './userReducer';

const reducer = combineReducers( {
    appState: AppStateReducer,
    user: UserReducer,
    form: formReducer
} );

export default reducer;