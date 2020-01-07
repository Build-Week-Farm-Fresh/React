import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

export default function FarmerLogIn(props) {
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
            <h2>Login for Farmers</h2>
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
                <Button color="primary" type="submit">Login</Button>
                <p>Consumer? Click <span><Link to="/consumer-login">here</Link></span></p>
            </form>
        </div>
    )
}
