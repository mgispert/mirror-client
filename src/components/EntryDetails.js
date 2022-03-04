import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const useGetEntry = () => {
  const [entry, setEntry] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { entryId } = useParams();
  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = getToken();
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
  }, [getToken, entryId]);

  return { entry, error, loading };
};

export default function EntryDetails() {
  const { entry, error, loading } = useGetEntry();

  return (
    <section>
      {error ? (
        <span>Error</span>
      ) : loading ? (
        <span>Loading...</span>
      ) : entry ? (
        <div>
          <div>
            <h3>{entry.date}</h3>
            <h3>{entry.title}</h3>
          </div>
          <div>
            <p>
              My grade for the day is: <strong>{entry.grade}</strong>
            </p>
            <p>
              I'm grateful for: <strong>{entry.grateful}</strong>
            </p>
            <p>
              My emotion for the day is: <strong>{entry.emotion}</strong>
            </p>
            <p>
              The person or people who made my day better:
              <strong>{entry.person}</strong>
            </p>
            <p>
              What can I do in order to improve?:{" "}
              <strong>{entry.improvement}</strong>
            </p>
            <p>
              What else can I say about the day?: <strong>{entry.free}</strong>
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
