import { combineReducers } from 'redux'
import dashboardReducer from './dashboardReducer';
import authenticationReducer from './AuthenticationReducer';
export default combineReducers({
    dashboardReducer,
    authenticationReducer
})