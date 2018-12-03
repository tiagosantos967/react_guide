import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actions'

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
              success: action.username,
              error: false
            }
        
        case LOGIN_ERROR:
            return {
              ...state,
              isLoggingIn: false,
              success: false,
              error: action.error
            }

        default:
            return state
    }
}