import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export const useSignup = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const signup = (userDetails) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_URL}/auth/signup`, userDetails)
      .then((response) => {
        setLoading(false);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return { error, loading, signup };
};
