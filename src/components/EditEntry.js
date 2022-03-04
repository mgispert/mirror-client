import React, { useState } from "react";
import { useEditEntry } from "../hooks/useEditEntry";
import { useGetEntry } from "../hooks/useGetEntry";

export default function EditEntry() {
  const { entry } = useGetEntry();

  const [date, setDate] = useState(entry.date);
  const [title, setTitle] = useState(entry.title);
  const [grade, setGrade] = useState(entry.grade);
  const [grateful, setGrateful] = useState(entry.grateful);
  const [emotion, setEmotion] = useState(entry.emotion);
  const [person, setPerson] = useState(entry.person);
  const [improvement, setImprovement] = useState(entry.improvement);
  const [free, setFree] = useState(entry.free);

  const { error, loading, editEntry } = useEditEntry();

  const handleSubmit = (e) => {
    e.preventDefault();
    editEntry({
      date,
      title,
      grade,
      grateful,
      emotion,
      person,
      improvement,
      free,
    });
  };

  return (
    <div>
      {error ? (
        <div>
          <h3>Error updating your entry, please fill in all the forms</h3>
        </div>
      ) : loading ? (
        <span>Loading...</span>
      ) : null}
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <p>Date: </p>
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="text"
            name="date"
            placeholder="Write the date here"
          />
        </label>
        <label>
          <p>Title:</p>

          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            name="title"
            placeholder="Give a title to your day in 5 words or less"
          />
        </label>
        <label>
          <p>How would you grade your day from 1-10?:</p>

          <input
            value={grade}
            onChange={(e) => {
              setGrade(e.target.value);
            }}
            type="range"
            name="grade"
            min="0"
            max="10"
          />
        </label>
        <label>
          <p>Name at lease one thing you're grateful for:</p>

          <input
            value={grateful}
            onChange={(e) => {
              setGrateful(e.target.value);
            }}
            type="text"
            name="grateful"
            placeholder="Today I'm grateful for..."
          />
        </label>
        <label>
          <p>Which emotion do you identify with today?:</p>
          <select
            value={emotion}
            onChange={(e) => {
              setEmotion(e.target.value);
            }}
            type="text"
            name="emotion"
          >
            <option value="happy">Happiness</option>
            <option value="sad">Sadness</option>
            <option value="nothing">Apathy</option>
            <option value="tired">Exhaustion</option>
            <option value="proud">Pride</option>
            <option value="excited">Excitement</option>
            <option value="anxious">Anxiety</option>
            <option value="angry">Anger</option>
          </select>
        </label>
        <label>
          <p>Name at least one person who helped make your day better: </p>

          <input
            value={person}
            onChange={(e) => {
              setPerson(e.target.value);
            }}
            type="text"
            name="person"
            placeholder="This person helped me today"
          />
        </label>
        <label>
          <p>What can I do to improve or make my day better?:</p>

          <input
            value={improvement}
            onChange={(e) => {
              setImprovement(e.target.value);
            }}
            type="text"
            name="improvement"
            placeholder="Next time I'll try..."
          />
        </label>
        <label>
          <p>Feel free to express yourself:</p>

          <textarea
            value={free}
            onChange={(e) => {
              setFree(e.target.value);
            }}
            type="text"
            name="free"
            placeholder="I have more things to say..."
          ></textarea>
        </label>
        <button type="submit">Let it go</button>
      </form>
    </div>
  );
}
