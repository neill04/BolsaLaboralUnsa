import React, { useState } from "react";
import "./css/Login.css";
import logo from "./assets/logo.png";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submit", { username, password });
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Logo UNSA" className="login-logo" />
            <div className="login-title">BOLSA LABORAL</div>

            <form onSubmit={handleSubmit} className="login-form">
                <div>
                    <label htmlFor="username">Email Address</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="login-checkbox">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                </div>

                <button type="submit" className="login-button">
                    ENTRAR
                </button>
            </form>
        </div>
    );
}

export default Login;
