import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  return (
    <div>
      <h3>Please choose an option below</h3>
      <PickUser>
        <div>
          <Link to="/farmer-login">
            <StyledButton>Farmer</StyledButton>
          </Link>
        </div>
        <div>
          <Link to="/customer-login">
            <StyledButton>Customer</StyledButton>
          </Link>
        </div>
      </PickUser>
    </div>
  );
}

const StyledButton = styled.button`
  width: 300px;
  margin: 40px;
  border-radius: 25px;
`;

const PickUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
