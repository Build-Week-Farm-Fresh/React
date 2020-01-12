import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FarmerDashboard() {
  return (
    <div>
      <h1>Farmer Dashboard</h1>
      <FarmerBtn>Current Orders</FarmerBtn>
      <Link to="/myproduce">
        <FarmerBtn>My Produce</FarmerBtn>
      </Link>
    </div>
  );
}

const FarmerBtn = styled.button`
  width: 300px;
  margin: 40px;
  border-radius: 25px;
`;
