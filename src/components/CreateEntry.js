import axios from "axios";
import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const useCreateEntry = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);

  const addNewEntry = (entryDetails) => {
    const storedToken = getToken();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_URL}/entry/create`, entryDetails, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setLoading(false);
        navigate("/entry");
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return { error, loading, addNewEntry };
};

export default function CreateEntry() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);
  const [grateful, setGrateful] = useState("");
  const [emotion, setEmotion] = useState("");
  const [person, setPerson] = useState("");
  const [improvement, setImprovement] = useState("");
  const [free, setFree] = useState("");
  const { error, loading, addNewEntry } = useCreateEntry();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewEntry({
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
      {error ? <span>Error</span> : loading ? <span>Loading...</span> : null}
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <p>Date:</p>
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="text"
            name="date"
            className="input"
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
          ></textarea>
        </label>
        <button type="submit">Let it go</button>
      </form>
    </div>
  );
}
