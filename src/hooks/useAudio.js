import mySound from "../components/1Hour Relaxing Piano Musicmp3 (mp3cut.net).mp3";
import { useState, useEffect } from "react";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";

const useAudio = (url) => {
  const [audio] = useState(new Audio(mySound));
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (playing === false) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggleAudio];
};

const Player = ({ url }) => {
  const [playing, toggleAudio] = useAudio(mySound);

  return (
    <div>
      <button onClick={toggleAudio}>
        {" "}
        {playing === false ? <MdOutlineMusicNote /> : <MdOutlineMusicOff />}
      </button>
    </div>
  );
};

export default Player;
