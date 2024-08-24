import React, { useState } from "react";
import "./Login.css";

import Welcomebg from "../../assets/welcome-bg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="welcome">
      <div className="welcome-l">
        <img src={Welcomebg} alt="Welcome background" />
      </div>
      <div className="welcome-r">
        <h1>Quiz Time</h1>
        <div className="login">
          <h2>Login</h2>
          <p>with your registered Email address</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <input type="submit" value="Login" className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
