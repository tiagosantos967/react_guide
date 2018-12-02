import { LOGIN_REQUEST, LOGIN_SUCCESS } from './actions'

const initialState = {
    isLoading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: 
            return {
              ...state,
              isLoggingIn: true
            }
        
        case LOGIN_SUCCESS: 
            return {
              ...state,
              isLoggingIn: false,
              isSuccess: true,
            }

        default:
            return state
    }
}