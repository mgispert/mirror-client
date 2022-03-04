import React from "react";
import { useGetEntryList } from "../hooks/useGetEntryList";

export default function Stats() {
  const { entries } = useGetEntryList();

  const count = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  };

  const getStats = () => {
    entries.map((entry) => (count[entry.grade] += 1));
    return count;
  };

  return (
    <section>
      <h3>Those are your grades: </h3>
      {entries.length ? (
        JSON.stringify(getStats())
      ) : (
        <span>sorry, no stats</span>
      )}
    </section>
  );
}
