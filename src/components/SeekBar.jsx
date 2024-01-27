import React, { useState } from "react";

const SeekbarExample = ({ song, play, pause, resume }) => {
  const [seekbarValue, setSeekbarValue] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleSeekbarChange = (event) => {
    setSeekbarValue(event.target.value);
  };

  const togli = () => {

    isPlaying ? pause() : resume();
    setIsPlaying(!isPlaying);
  
  }

  return (
    <div className="flex flex-col mt-6">
      <input
        type="range"
        id="seekbar"
        name="seekbar"
        min="0"
        max={song.duration}
        value={seekbarValue}
        onChange={handleSeekbarChange}
        className="w-full"
      />
      <div className="flex justify-between items-center p-2 rounded-xl bg-gradient-to-t from-stone-900 to-stone-600">
        <div className="flex">
        <img
            src={song.image[2].link}
            className="w-16 h-216 hover:cursor-pointer"
            alt="img"
          />
          <div className="flex flex-col pl-3 justify-center text-left">
            <span className="font-bold text-lg">{song.name}</span>
            <div className="text-center font-thin">{song.primaryArtists}</div>
          </div>
        </div>
          <button
            className="bg-white text-black h-fit p-3 rounded-3xl px-6 font-bold"
            onClick={togli}
          >
            {isPlaying ? "pause" : "play"}
          </button>

          <div>
            volume bar
          </div>
          
      </div>
    </div>
  );
};

export default SeekbarExample;
