import React from "react"
import {Link} from 'react-router-dom'
import styled from "styled-components"

export default function Login() {

  return(
    <div>
      <h3>Please choose an option below</h3>
      <PickUser>
        <Farmer>
          <Link to="/farmer-login">
            <StyledButton>Farmer</StyledButton>
          </Link>
        </Farmer>
        <Customer>
          <Link to="/customer-login">
            <StyledButton>Customer</StyledButton>
          </Link>
        </Customer>
      </PickUser>  
    </div>
  )

}

const StyledButton = styled.button`
  width: 300px;
  margin: 40px;
  border-radius: 25px;
`

const PickUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Farmer = styled.div`

`
const Customer = styled.div`

`