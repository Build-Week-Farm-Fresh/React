
import React from "react";
import { Link } from "react-router-dom";

export default function CustomerDashboard() {
  return (
    <>
      <h1>My Dashboard</h1>
      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
      // value={userCreds.email}
      // onChange={handleChange}
      />
      <button>Find Produce</button>
      <Link to="/order/">
        <button>Shopping Cart</button>
      </Link>
    </>
  )

}

// ADD FORM TO INSERT A ZIP CODE