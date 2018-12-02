export const LOGIN_REQUEST = 'LoginBox/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LoginBox/LOGIN_SUCCESS'

export function login() {
    return {
        type: LOGIN_REQUEST
    }
}

export function success(userName) {
    return {
        type: LOGIN_SUCCESS,
        userName
    }
}