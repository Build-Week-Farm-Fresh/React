import React, { useState } from "react";
import {Link} from "react-router-dom"


export default function ConsumerLogIn(props) {
    const credentials = { username: "", password: "" }

    const [userCreds, setUserCreds] = useState(credentials)

    const handleChange = e => {
        setUserCreds({
            ...userCreds,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="login">
            <h2>Login for Consumers</h2>
            <form className="login-form">
                
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={userCreds.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userCreds.password}
                    onChange={handleChange}
                />
                <Link to="/customer-dashboard">
                  <button type="submit">Login</button>
                </Link>  
                <p>Farmer? Click <span><Link to="/farmer-login">here</Link></span></p>
            </form>
        </div>    
    )
}
