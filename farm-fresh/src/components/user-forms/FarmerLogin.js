import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";

import { login } from "../../store/actions/";

function FarmerLogin(props) {
  const [userCreds, setUserCreds] = useState({ username: "", password: "" });

  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.login(userCreds, props.history);
  };

  return (
    <FarmerLoginDiv>
      <h1 className="farmer-login">Login for Farmers</h1>
      <LoginForm className="login-form" onSubmit={onSubmit}>
        <InputType>
          USERNAME<Asterisk>*</Asterisk>
        </InputType>
        <Input
          type="text"
          name="username"
          placeholder="   username"
          value={userCreds.username}
          onChange={handleChange}
        ></Input>
        <InputType>
          PASSWORD<Asterisk>*</Asterisk>
        </InputType>
        <Input
          type="password"
          name="password"
          placeholder="   password"
          value={userCreds.password}
          onChange={handleChange}
        ></Input>
        <FarmerLoginBtn type="submit">
          {" "}
          LOG IN{" "}
          <span>
            <i className="fas fa-arrow-right"></i>
          </span>
        </FarmerLoginBtn>
      </LoginForm>

      {props.loginError && (
        <p style={{ color: "red", marginTop: "10vh" }}>
          Username or password is incorrect. Please try again.
        </p>
      )}
    </FarmerLoginDiv>
  );
}

const mapStateToProps = state => ({
  loginError: state.loginError
});

export default connect(
  mapStateToProps,
  { login }
)(withRouter(FarmerLogin));

const Asterisk = styled.span`
  color: orange;
`;
const InputType = styled.p`
  margin-left: -150px;
  width: 250px;
  margin-bottom: 0;
`;

const FarmerLoginDiv = styled.div`
  background-color: #f1e7d7;
  border: 1px solid #9f937d;
  width: 500px;
  height: 400px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space;
`;

const LoginForm = styled.form`
  margin-top: 30px;
  width: 250px;
`;

const Input = styled.input`
  display: flex;
  margin-bottom: 15px;
  width: 250px;
  height: 40px;
  border-color: black;
`;
const FarmerLoginBtn = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 40px;
  background-color: orange;
  border: none;
  color: white;
`;
