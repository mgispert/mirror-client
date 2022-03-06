import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = (userDetails) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_URL}/auth/signup`, userDetails)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        setError(true);
      });
  };

  return { error, loading, signup };
};
