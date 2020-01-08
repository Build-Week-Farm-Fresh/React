import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const login = (userCreds, history) => dispatch => {
    dispatch({ type: LOGIN_START }) 

    axios
    .post('https://farm-fresh-backend.herokuapp.com/api/auth/login', userCreds)
    .then(res=> {
        console.log(res)
        setTimeout(()=>{
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            localStorage.setItem("token", res.data.token)
            history.push('/farmer-dashboard')
        }, 500)
    })
    .catch(err=>dispatch({ type: LOGIN_ERROR }))
}

export const LOGOUT = 'LOGOUT'

export const logout = (history) => dispatch => {
    dispatch({ type: LOGOUT})
    history.push('/farmer-login')
    localStorage.removeItem("token")
}