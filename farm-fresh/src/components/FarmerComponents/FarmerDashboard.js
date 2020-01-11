import React from "react";
import { Link } from "react-router-dom"
import { Button } from 'reactstrap';

export default function FarmerDashboard() {
  return (
    <div>
      <h1>Farmer Dashboard</h1>
      <Button color="danger">Current Orders</Button>
      <Link to="/myproduce">
        <Button color="success">My Produce</Button>
      </Link>
    </div>


  )
}
