/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import SingupModal from "../SingUp/singupModal";
import axios from "axios";
import "./loginpage.css";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [isModalVisible, setisModalVisible] = useState(false);

  const toggleModal = () => {
    console.log("Modal visibility: ", !isModalVisible);
    setisModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const background = document.querySelector(".login-page");
    if(isModalVisible){
      background.classList.add("blur-background");
    }else{
      background.classList.remove("blur-background");
    }
  }, [isModalVisible]);
  
  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div>
    <div className="login-page">
      <div className="Title">
      <img src="https://user-images.githubusercontent.com/62365628/226145294-5df03576-8fad-4819-a29f-f0e57c02a803.png" alt="" />
        <h1> 
        Welcome to the new chat app< br/>on the web
        </h1>
      </div>
      <div className="form-side">
      <div className="card">
          {/* Login Form */}
          <form onSubmit={onLogin}>
            <div className="title">Login</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
              required
            />
            <button type="submit" className="login-button">LOGIN</button>
            <button type="none" onClick={toggleModal} className="singup-button">SING UP</button>
          </form>
        </div>
      </div>
    </div>
    {isModalVisible && (
      <SingupModal toggleModal={toggleModal} />)}
    </div>
  );
};

export default AuthPage;