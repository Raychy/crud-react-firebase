
import React, { useState } from 'react'
import './App.css';
import Movieform from './components/MovieForm';
import Movieslist from './components/MovieList';


function App() {

  const [movieId, setMovieId] = useState("");

  const getMovieIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setMovieId(id);
  };

  return (
    <div className="App">
      <Movieform id={movieId} setMovieId={setMovieId} />
       <Movieslist   
       getMovieId = {getMovieIdHandler}
     
       />
    </div>
  );
}

export default App;
