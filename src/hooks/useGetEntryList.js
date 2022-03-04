import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useState, useContext, useEffect } from "react";

export const useGetEntryList = () => {
  const [entries, setEntries] = useState([]);

  const { getToken, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      const storedToken = getToken();
      axios
        .get(`${process.env.REACT_APP_URL}/entry`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((result) => {
          setEntries(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, getToken]);
  return { entries };
};
