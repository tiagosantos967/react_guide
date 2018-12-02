
/*
    Use this to make connections to the backend API
*/

export default ({
    login: (username, password) => {
        return username === password 
        ? Promise.resolve({username: 'TMA'}) 
        : Promise.reject({message: 'Email or password wrong'})
    }
})