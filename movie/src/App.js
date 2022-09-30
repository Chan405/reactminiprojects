import React, {useEffect, useState} from 'react';
import Searchicon from "./search.svg";
import MovieCard from "./moviecard";

// http://www.omdbapi.com/?i=tt3896198&apikey=f61eae97

const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=f61eae97";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const responsive = await fetch(`${api_url}&s=${title}`);
    const data = await responsive.json();
    setMovies(data.Search);
  }

  useEffect( () => {
    searchMovies("Disney");
  }, []);

  return (
    <div className = "app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
              type="text"
              placeholder = "Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src={Searchicon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>


      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
