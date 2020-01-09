import React from "react";
import {Link} from "react-router-dom"

export default function FarmerDashboard() {
  return(
    <div>
      <h1>Farmer Dashboard</h1>
      <button>Current Orders</button>
      <Link to="/myproduce">
        <button>My Produce</button>
      </Link>
    </div>

    
  )
}
