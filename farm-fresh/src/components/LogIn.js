import React, { useState } from "react";


export default function LogIn() {
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
            <h1>Login</h1>
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
                <button className="on-submit" type="submit">Login</button>
            </form>
        </div>    
    )
}
