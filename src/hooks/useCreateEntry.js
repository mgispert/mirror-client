import axios from "axios";
import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export const useCreateEntry = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);

  const addNewEntry = (entryDetails) => {
    const storedToken = getToken();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_URL}/entry/create`, entryDetails, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setLoading(false);
        navigate("/entry");
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return { error, loading, addNewEntry };
};
