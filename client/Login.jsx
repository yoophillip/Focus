import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const [status, setStatus] = useState(false)

    function login() {
        const username = document.getElementById("loginId").value;
        const password = document.getElementById("loginPw").value;
        fetch('/login', {
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
    if (status) {
        return <Navigate to="/timer" />;
    }

    return (
        <>
            < div className="main" >
                <h1 className="welcome">Welcome to Focus!</h1>
                <p className="loginmsg">please login / register to continue...</p>
                <input id="loginId" name="username" type="text" placeholder="Username"></input>
                <br />
                <input id="loginPw" name="password" type="password" placeholder="Password"></input>
                <br />
                <Link className="registerLink" to="/register">Register</Link>
                <button className="loginbtn" onClick={login}>Log in</button>
            </ div >
        </>
    )
}

export default Login