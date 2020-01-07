import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, CardImg } from 'reactstrap';
import FarmLogo from './farm-fresh-logo.png';

export default function FarmerLogIn(props) {
    const credentials = { username: "", password: "" }

    const [userCreds, setUserCreds] = useState(credentials)

    const handleChange = e => {
        setUserCreds({
            ...userCreds,
            [e.target.name]: e.target.value
        })
    }

    let width = {
        width: '250px'
    };

    return (
        <div className="login">
            <CardImg top width="20%" src={FarmLogo} alt="Farm Fresh logo" style={width} />
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
