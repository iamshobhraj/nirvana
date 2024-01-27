import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null)

  const genrSong = (value) => {
    setSongs(value);
  };

  const play = (link) => {
    setCurrentSong(link);
    new Audio(link).play();
  };

  return (
    <>
      <SearchBar genrSong={genrSong} />
      {songs.length === 0 ? (
        <div>search for a song</div>
      ) : (
        <div className="flex flex-col">
          <span className="font-bold text-xl text-left pb-5">Songs</span>
          {songs.map((result, index) => (
            <div className="flex justify-start m-1" key={index}>
              <img src={result.image[2].link} className="w-16 h-16 hover:cursor-pointer" alt="img" onClick={() => play(result.downloadUrl[4].link)} />
              <div className="flex flex-col ml-10 justify-center text-left">
                <span
                  href={result.downloadUrl[4].link}
                  className="font-bold"
                >
                  {result.name}
                </span>
                <div className="text-center font-thin">
                  {result.primaryArtists}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
