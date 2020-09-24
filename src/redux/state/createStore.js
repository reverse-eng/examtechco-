import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
    switch(action.type){
        case `INCREMENT`:
            return Object.assign({}, state, {
                count: state.count + 1
              })
        case 'LOGIN_USER':
            return Object.assign({}, state, {
                user: {username: 'test'}
              })
        default: 
            return state
    }
  
}
const initialState = { count: 0, user: {} }
const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore