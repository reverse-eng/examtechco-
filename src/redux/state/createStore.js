import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
    SET_EXAM_QAS,
    GET_ALL_EXAMS, 
    SET_USER_DETAILS, 
    SET_ERROR_RESPONSE,
    LOGIN_REDIRECT,
    EXAM_START_REDIRECT,
    CLEAR_REDIRECTS
} from '../actions/types';

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
        case LOGIN_REDIRECT:
            return { ...state, redirectToLogin: action.payload };
        case EXAM_START_REDIRECT: 
            return { ...state, redirectToStartExam: action.payload }
        case CLEAR_REDIRECTS: 
              let redirects = ['redirectToStartExam', 'redirectToLogin'];
              redirects.map(item=>{
                   if (state[item] != undefined){
                    delete state[item]
                    }
              })
            return {...state}
        case GET_ALL_EXAMS: {
            return {...state, exams: action.payload}
        }
        case SET_EXAM_QAS: {
            return {...state, examQAS: action.payload}
        }
        default: 
            return state
    }
  
}
const initialState = { 
    count: 0, 
    user: {}, 
    errorResponse:{},

}


//only use during development to see state change and initial build
//const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers = compose;
const Store = () => createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default Store