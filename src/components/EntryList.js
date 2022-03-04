import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetEntryList } from "../hooks/useGetEntryList";

export default function EntryList() {
  const { entries } = useGetEntryList();
  return (
    <div>
      <h1>Entry Log:</h1>

      {entries.length ? (
        entries.map((entry, index) => {
          return (
            <div key={index}>
              <Link to={`/entry/${entry._id}`}>
                {entry.date} | {entry.title}
              </Link>
            </div>
          );
        })
      ) : (
        <div>
          <p>No entries, let's go for it </p>
          <NavLink to="/entry/create">Create one now!</NavLink>
        </div>
      )}
    </div>
  );
}
