import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './reducers/userReducer';

const reducer = combineReducers( {
    user: UserReducer,
    form: formReducer
} );

export default reducer;