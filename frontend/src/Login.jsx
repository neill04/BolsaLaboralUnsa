import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import { login } from "./api/authService";
import useRoleRedirect from "./hooks/useRoleRedirect";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("token");
        if (stored) {
            setToken(stored);
        }
    }, []);

    useRoleRedirect(token);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submit", { username, password });
        login({ username, password })
            .then((data) => {
                localStorage.setItem("token", data.token);
                setToken(data.token);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="login-container">
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
