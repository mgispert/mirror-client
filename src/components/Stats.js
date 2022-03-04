import React from "react";
import { useGetEntryList } from "../hooks/useGetEntryList";

export default function Stats() {
  const { entries } = useGetEntryList();

  const getStats = () => {
    let starting = 0;
    entries.map((entry) => {
      return (starting += entry.grade);
    });
    return starting;
  };

  return (
    <section>
      <h3>Those are your grades: </h3>
      {entries.length ? getStats() : <span>sorry, no entries</span>}
    </section>
  );
}
