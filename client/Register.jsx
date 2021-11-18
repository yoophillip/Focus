import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [status, setStatus] = useState(false)

    function register() {
        const username = document.getElementById("registerName").value;
        const password = document.getElementById("registerPassword").value;
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.login === true) {
                    return setStatus(true)
                }
            });
    }
    const navigate = useNavigate()
    if (status) {
        return <Navigate to="/" />;
    }
    return (
        <div className="Main">
            <h1 className="welcome">Register to Save Your Progress!</h1>
            <input id="registerName" name="username" type="text" placeholder="Username"></input>
            <br />
            <input id="registerPassword" name="password" type="password" placeholder="Password"></input>
            <br />
            <button className="registerbtn" onClick={register}>Register</button>
            <button className="registerback" onClick={() => navigate(-1)}>Back to Login</button>
        </div>
    )
}

export default Register
