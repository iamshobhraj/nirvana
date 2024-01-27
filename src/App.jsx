
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  
  const [songs, setSongs] = useState([]);
  
  const genrSong = (value) => {
    setSongs(value);
  }
  
  return (
    <>
      <SearchBar genrSong={genrSong} />
      {
        songs.length === 0 ? (
          <div>search for a song</div>
        ) : (
          <div className="flex flex-col">
          <span className='font-bold text-xl text-left pb-5'>Songs</span>
            {songs.map((result,index) =>
            <div className='flex justify-start m-1'>

            <img src={result.image[2].link} className='w-16 h-16' alt="img" />
            <div className='flex flex-col ml-10 justify-center text-left'>

            <a href={result.downloadUrl[4].link} key={index} className='font-bold'>{result.name}</a>
            <div className='text-center font-thin'>{result.primaryArtists}</div>
            </div>
            </div> 
            
            )}
          </div>
      )}
    </>
  )
}

export default App
