import { useState, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SeekbarExample from "./components/SeekBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const audioRef = useRef(null);

  const genrSong = (value) => {
    setSongs(value);
  };
  const play = (value) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setCurrentSong(value);

    const audio = audioRef.current || new Audio();
    audio.src = value.downloadUrl[4].link;
    audio.addEventListener('timeupdate', () => {
      setElapsedTime(audio.currentTime);
    })
    audio.play();

    audioRef.current = audio;
  };

  

  const pause = () => {
    audioRef.current.pause()
  }

  const resume = () => {
    audioRef.current.play()
  }

  return (
    <>
      <SearchBar genrSong={genrSong} />
      {songs.length === 0 ? (
        <div>search for a song</div>
      ) : (
        <SearchResults songs={songs} play={play} genrsong={genrSong} />
      )}
      {currentSong ? (<SeekbarExample song={currentSong} play={play} pause={pause} resume={resume} elapsedTime={elapsedTime} audioRef={audioRef} />) : (<div></div>)}
      
    </>
  );
}

export default App;
