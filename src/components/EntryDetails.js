import { Link } from "react-router-dom";
import { useGetEntry } from "../hooks/useGetEntry";
import { useParams } from "react-router-dom";

export default function EntryDetails() {
  const { entry, error, loading, deleteEntry } = useGetEntry();
  const { entryId } = useParams();
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
          <div>
            <Link to={`/entry/${entryId}/edit`}>
              <button>Edit entry</button>
            </Link>
            <button onClick={() => deleteEntry(entry.id)}>Delete entry</button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
