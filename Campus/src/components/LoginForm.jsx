import React from "react";
import "./LoginForm.css";

const LoginForm = () => (
  <div className="login-box">
    <h3>Login</h3>
    <input placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
  </div>
);

export default LoginForm;
