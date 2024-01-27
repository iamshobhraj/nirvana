
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
            {songs.map((result,index) => 
            <a href={result.downloadUrl[4].link} key={index}>{result.name}</a>
            
            )}
          </div>
      )}
    </>
  )
}

export default App
