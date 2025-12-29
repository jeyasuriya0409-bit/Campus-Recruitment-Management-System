import React, { useState } from "react";

export default function AuthBox({ title }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="card">
      <h3 className="card-title">
        {isLogin ? `${title} Login` : `${title} Register`}
      </h3>

      <input className="input" placeholder="Email" />
      <input className="input" type="password" placeholder="Password" />

      {!isLogin && (
        <input className="input" placeholder="Name" />
      )}

      <button className="primary-btn">
        {isLogin ? "Login" : "Register"}
      </button>

      <p className="switch-text">
        {isLogin ? "New user?" : "Already registered?"}
        <span className="switch-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? " Create account" : " Login"}
        </span>
      </p>
    </div>
  );
}
