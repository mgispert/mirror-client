import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

export default function EditUserProfile() {
  const { user } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);
  const { userId } = useParams();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setPassword(user.password);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProfile({
      username,
      password,
      email,
    });
  };

  const editProfile = (userDetails) => {
    const storedToken = getToken();
    setLoading(true);
    axios
      .put(`${process.env.REACT_APP_URL}/user/${userId}/edit`, userDetails, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setLoading(false);
        navigate(`/user/${userId}`);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <section>
      {error ? (
        <div>
          <h3>Error updating your profile, please fill in all the forms</h3>
        </div>
      ) : loading ? (
        <span>Loading...</span>
      ) : user ? (
        <>
          <h4>
            You'll see the updated information once you log in again with the
            new details!{" "}
          </h4>
          <form onSubmit={handleSubmit} className="form">
            <label className="label">
              <p>Username: </p>
              <input
                defaultValue={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="username"
                name="username"
                placeholder="Write the username here"
              />
            </label>
            <label className="label">
              <p>Email: </p>
              <input
                defaultValue={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
                placeholder="Write the email here"
              />
            </label>
            <label>
              <p>Password:</p>

              <input
                defaultValue={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name="password"
                placeholder="Write the password here"
              />
            </label>

            <button type="submit">Let it go</button>
          </form>
        </>
      ) : null}
    </section>
  );
}
