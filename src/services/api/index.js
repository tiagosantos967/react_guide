
/*
    Use this to make connections to the backend API
*/

export default ({
    login: (email, password) => {
        return email === password 
        ? Promise.resolve({username: 'TMA'}) 
        : Promise.reject({message: 'Email or password wrong'})
    }
})