import React from "react"
import {Link} from 'react-router-dom'

export default function Login() {

  return(
    
    <>
    <h1>Farm Fresh Produce</h1>
    <Link to="/farmer-login">
      <button>Farmer</button>
    </Link>
    <Link to="/consumer-login">
      <button>Consumer</button>
    </Link>
    </>  
  )

}