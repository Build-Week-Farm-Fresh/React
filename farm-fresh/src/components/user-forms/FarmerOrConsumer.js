import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  return (
    <div>
      <h3>Are you a <span style={{color: 'orange', borderBottom: '2px solid'}}>Farmer</span> or <span style={{color: 'orange', borderBottom: '2px solid'}}>Customer</span>?</h3>
      <PickUser>
        <div>
          <Link to="/farmer-login">
            <StyledButton>Farmer <i className="fas fa-tractor"></i></StyledButton>
          </Link>
        </div>
        <div>
          <Link to="/customer-login">
            <StyledButton>Customer <i className="fas fa-shopping-cart"></i></StyledButton>
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
