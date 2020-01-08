import React, { useState } from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, CardImg } from 'reactstrap';
import FarmLogo from './farm-fresh-logo.png';


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
  
  let width = {
      width: '250px'
  };
  
  return (
   <div className="login">
      <CardImg top width="20%" src={FarmLogo} alt="Farm Fresh logo" style={width} />
      <h2>Login for Farmers</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <input type = "text" name="username" placeholder="username" value={creds.username} onChange={handleChange}></input>
        <input type = "password" name="password" placeholder="password" value={creds.password} onChange={handleChange}></input>
  
        <Button color="primary" type="submit"> Log In </button>
      </form>
  
      {props.loginError && 
      <p style={{ color: 'red', marginTop: '10vh'}}>Username or password is incorrect. Please try again.</p>
      }
   </div>
  )
}

const mapStateToProps = state => ({
  loginError: state.loginError
})

export default connect(
  mapStateToProps,
  { login }
  )(withRouter(Login))
