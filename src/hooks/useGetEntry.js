import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const useGetEntry = () => {
  const [entry, setEntry] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { entryId } = useParams();
  const { getToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const storedToken = getToken();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_URL}/entry/${entryId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((result) => {
        setLoading(false);
        setEntry(result.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [getToken, entryId, storedToken]);

  const deleteEntry = () => {
    axios
      .delete(`${process.env.REACT_APP_URL}/entry/delete/${entryId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        toast({
          title: "Deleted entry successfully!",
          status: "success",
          isClosable: true,
        });
        navigate("/entries");
      });
  };

  return { entry, error, loading, deleteEntry };
};
