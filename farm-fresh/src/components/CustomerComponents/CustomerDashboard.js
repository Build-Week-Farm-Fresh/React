
import React from "react"
import {Link} from "react-router-dom"

export default function CustomerDashboard() {
  return(
    <>
      <h1>My Dashboard</h1>
      <button>Find Produce</button>
      <Link to="my-orders">
        <button>Shopping Cart</button>
      </Link>
    </>
  )

}