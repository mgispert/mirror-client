import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

export default function EntryList(props) {
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
  return (
    <div>
      <h1>Entry Log:</h1>
      {entries.map((entry, index) => {
        return (
          <div key={index}>
            <Link to={`/entry/${entry._id}`}>
              {entry.date} | {entry.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
