import React, { useState } from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from "styled-components"

import {login} from '../../store/actions/index.js'

function FarmerLogin(props) {
  
  const [userCreds, setUserCreds] = useState({username: "", password: ""})

  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
   props.login(userCreds, props.history)
  }
  
  let width = {
      width: '250px'
  };
  
  return (
   <FarmerLoginDiv>
      <StyledHeader>Login for Farmers</StyledHeader>
      <LoginForm className="login-form" onSubmit={onSubmit}>
        <p>Username:</p>
        <Input type = "text" name="username" placeholder="username" value={userCreds.username} onChange={handleChange}></Input>
        <p>Password:</p>
        <Input type = "password" name="password" placeholder="password" value={userCreds.password} onChange={handleChange}></Input>
        <FarmerLoginBtn type="submit"> Log In </FarmerLoginBtn>
      </LoginForm>
  
      {props.loginError && 
      <p style={{ color: 'red', marginTop: '10vh'}}>Username or password is incorrect. Please try again.</p>
      }
   </FarmerLoginDiv>
  )
}

const mapStateToProps = state => ({
  loginError: state.loginError
})

export default connect(
  mapStateToProps,
  { login }
  )(withRouter(FarmerLogin))


const StyledHeader = styled.p`
  font-size: 2em;
  margin-top: 20px;
`

const FarmerLoginDiv = styled.div`
  background-color: #c5bba5;
  border: 1px solid #9f937d;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space;
`

const LoginForm = styled.form`
  margin-top: 30px;
`

const Input = styled.input`
  display: flex;
  margin-bottom: 15px;
  border-radius: 10px;
  width: 250px;
  height: 40px;

`
const FarmerLoginBtn = styled.button`
  margin-top: 30px;
  width: 100px;
  border-radius: 10px;
`