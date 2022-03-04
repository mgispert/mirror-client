// src/pages/SignupPage.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const userDetails = { username, password, email };

    axios
      .post(`${process.env.REACT_APP_URL}/auth/signup`, userDetails)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.errorMessage;
        console.log("error creating a new user", errorDescription);
        setErrorMessage(errorDescription);
      });
  };

  // ...

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <form onSubmit={handleSignupSubmit}>
        <label>
          Username:
          <input
            type="username"
            required={true}
            name="username"
            value={username}
            onChange={handleUsername}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            required={true}
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            required={true}
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </label>

        <button type="submit">Register</button>
      </form>

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
