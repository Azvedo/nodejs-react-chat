/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import "./authpage.css";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  
  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page">
      <div className="Title">
      <img src="https://user-images.githubusercontent.com/62365628/226145294-5df03576-8fad-4819-a29f-f0e57c02a803.png" alt="" />
        <h1> 
        Welcome to the new chat app< br/>on the web
        </h1>
      </div>
      <div className="card">
        {/* Login Form */}
        <form onSubmit={onLogin}>
          <div className="title">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit">LOG IN</button>
        </form>
        <p>
          <a href=""> 
            Sing up
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;