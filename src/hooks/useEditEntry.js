import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { useState, useContext } from "react";

export const useEditEntry = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);
  const { entryId } = useParams();

  const editEntry = (entryDetails) => {
    const storedToken = getToken();
    setLoading(true);
    axios
      .put(`${process.env.REACT_APP_URL}/entry/${entryId}/edit`, entryDetails, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setLoading(false);
        navigate(`/entries/${entryId}`);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return { error, loading, editEntry };
};
