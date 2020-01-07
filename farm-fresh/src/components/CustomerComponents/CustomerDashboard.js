
import React from "react";
import { Link } from "react-router-dom";

export default function CustomerDashboard() {
  return (
    <>
      <h1>My Dashboard</h1>
      <button>Find Produce</button>
      <Link to="/order/">
        <button>Shopping Cart</button>
      </Link>
    </>
  )

}

// ADD FORM TO INSERT A ZIP CODE