import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {SET_USER_DETAILS, SET_ERROR_RESPONSE} from '../actions/types';

const reducer = (state, action) => {
    switch(action.type){
        case `INCREMENT`:
            return Object.assign({}, state, {
                count: state.count + 1
              })
        case 'LOGIN_USER':
            return {...state, user: {username: 'test'}} 
        case 'LOGOUT_USER':
            return {...state, user: {}}
        case SET_USER_DETAILS:
            return {...state, user: action.payload }
        case SET_ERROR_RESPONSE: 
            return {...state, errorResponse: action.payload }
        default: 
            return state
    }
  
}
const initialState = { 
    count: 0, 
    user: {}, 
    errorResponse:{},

}
//only use during development to see state change
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = () => createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default Store