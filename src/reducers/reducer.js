import { combineReducers } from 'redux';
import { formReducer } from 'redux-form';
import UserReducer from './userReducer';

const reducer = combineReducers( {
    user: UserReducer,
    form: formReducer
} );

export default reducer;