export const LOGIN_REQUEST = 'LoginBox/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LoginBox/LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LoginBox/LOGIN_ERROR'

export function login(email,password) {
    return {
        type: LOGIN_REQUEST,
        email,
        password
    }
}

export function success({username}) {
    return {
        type: LOGIN_SUCCESS,
        username
    }
}

export function error({message}) {
    return {
        type: LOGIN_ERROR,
        error: message
    }
}