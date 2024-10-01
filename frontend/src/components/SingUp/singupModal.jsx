/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";
import axios from "axios";
import "./singupModal.css";



const SingupModal = ({toggleModal}) => {
    
    const [username, setUsername] = useState();
    const [secret, setSecret] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();

    const onSignup = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3001/signup", {
            username,
            secret,
            first_name,
            last_name,
          })
          .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
          .catch((e) => console.log(JSON.stringify(e.response.data)));
      };

  return (
    <div className="singup-page">
      <form onSubmit={onSignup} className="singUp-form">
        <div className="header-card">
          <div className="title">Sign Up</div>
          <div className="close-button">
            <button onClick={toggleModal}>X</button>
          </div>
        </div>
        
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <button type="submit" className="signUp-button">SIGN UP</button>
      </form>
    </div>
  );
};

export default SingupModal;