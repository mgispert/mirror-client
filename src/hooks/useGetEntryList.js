import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useState, useContext, useEffect } from "react";

export const useGetEntryList = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { getToken, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);
      const storedToken = getToken();
      axios
        .get(`${process.env.REACT_APP_URL}/entry`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((result) => {
          setLoading(false);
          setEntries(result.data);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }
  }, [isLoggedIn, getToken]);

  return { entries, error, loading };
};
