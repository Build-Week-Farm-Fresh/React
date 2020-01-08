import React, { useState } from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {login} from '../../store/actions/index.js'

function Login(props) {
  
  const [creds, setCreds] = useState({})

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
   props.login(creds, props.history)
  }

  return (
   <>
      <form onSubmit={onSubmit}>
        <input type = "text" name="username" placeholder="username" value={creds.username} onChange={handleChange}></input>
        <input type = "password" name="password" placeholder="password" value={creds.password} onChange={handleChange}></input>
  
        <button type="submit"> Log In </button>
      </form>
  
      {props.loginError && 
      <p style={{ color: 'red', marginTop: '10vh'}}>Username or password is incorrect. Please try again.</p>
      }
   </>
  )
}

const mapStateToProps = state => ({
  loginError: state.loginError
})

export default connect(
  mapStateToProps,
  { login }
  )(withRouter(Login))
