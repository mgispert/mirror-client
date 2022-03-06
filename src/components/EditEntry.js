import React, { useEffect, useState } from "react";
import { useEditEntry } from "../hooks/useEditEntry";
import { useGetEntry } from "../hooks/useGetEntry";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

export default function EditEntry() {
  const {
    entry,
    loading: loadingGetEntry,
    error: errorGetEntry,
  } = useGetEntry();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);
  const [grateful, setGrateful] = useState("");
  const [emotion, setEmotion] = useState([]);
  const [person, setPerson] = useState("");
  const [improvement, setImprovement] = useState("");
  const [free, setFree] = useState("");

  useEffect(() => {
    if (entry) {
      setDate(entry.date);
      setTitle(entry.title);
      setGrade(entry.grade);
      setGrateful(entry.grateful);
      setEmotion(entry.emotion);
      setPerson(entry.person);
      setImprovement(entry.improvement);
      setFree(entry.free);
    }
  }, [entry]);
  const {
    error: errorEditEntry,
    loading: loadingEditEntry,
    editEntry,
  } = useEditEntry();

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

  console.log("emotion", emotion);

  return (
    <div>
      {errorGetEntry || errorEditEntry ? (
        <div>
          <h3>Error updating your entry, please fill in all the forms</h3>
        </div>
      ) : loadingGetEntry || loadingEditEntry ? (
        <span>Loading...</span>
      ) : entry ? (
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            <p>Date: </p>
            <input
              defaultValue={date}
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
              defaultValue={title}
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
              defaultValue={grade}
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
            <p>Name at least one thing you're grateful for:</p>

            <input
              defaultValue={grateful}
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
            <CheckboxGroup
              colorScheme="purple"
              value={emotion}
              onChange={(value) => {
                setEmotion(value);
              }}
            >
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                <Checkbox value="happiness">Happiness</Checkbox>
                <Checkbox value="saddness">Sadness</Checkbox>
                <Checkbox value="apathy">Apathy</Checkbox>
                <Checkbox value="exhaustion">Exhaustion</Checkbox>
                <Checkbox value="pride">Pride</Checkbox>
                <Checkbox value="excitement">Excitement</Checkbox>
                <Checkbox value="anxiety">Anxiety</Checkbox>
                <Checkbox value="anger">Anger</Checkbox>
              </Stack>
            </CheckboxGroup>
          </label>
          <label>
            <p>Name at least one person who helped make your day better: </p>

            <input
              defaultValue={person}
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
              defaultValue={improvement}
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
              defaultValue={free}
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
      ) : null}
    </div>
  );
}
