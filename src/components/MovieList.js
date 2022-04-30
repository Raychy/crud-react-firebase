import React,{useState, useEffect} from 'react';
import Movie from './Movie';
import MovieDatServie from "../services/book-service"

function Movieslist(props) {
  const [inputSearch, setInputSearch] = useState(''),
      [message, setMessage] = useState({ error: false, msg: "" });
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const dismissMessage =()=>{
    const timer = setTimeout(() => {
      // console.log('This will run after 1 second!')
      setMessage("");
    }, 2500);
    return () => clearTimeout(timer);
  }
 
  const getMovies = async () => {
    const data = await MovieDatServie.getAllMovies();
    // console.log(data.docs);
    setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await MovieDatServie.deleteMovie(id);
    setMessage({error:false, msg:"movie deleted successfully"})
      dismissMessage()
    getMovies();
  };

  return (
    <section className='movie-list-section'>
         {/* <button onClick={props.onAddMovie} className='add-btn' >Add New Movie</button> */}
         
         <div className='search-movie-row'>
         <input
         type='text'
         id='search'
         name="search"
         // value = {inputSearch}
         placeholder='search for movie name'
         onChange={(e)=>setInputSearch(e.target.value)}
         // onKeyDown={submitSearch}
       />
         </div>

    {message?.msg && ( 
          <div className={ message?.error ? "alert__msg--error" : "alert__msg--success"}  
          onClick={()=>setMessage("")}>
         {message?.msg}
          </div>
        )}
      {
      movies.length !== 0 ?
          
        <table>
          <thead>
          <tr>
          {/* <th>S/N</th> */}
          <th>Movie Name</th>
          <th>Movie Rating</th>
          <th>Duration</th>
          <th>Action</th>
        </tr>
          </thead>
       
        <tbody>           {
             // eslint-disable-next-line array-callback-return
             movies.filter((movie) =>{
               if(inputSearch === ''){
                 return movie;
               }
               else if(movie.movieName.toLowerCase().includes(inputSearch.toLowerCase()) ){
                 return movie;
               }
             }).map((movie)=>(
               <Movie  
               movie={movie}
               key={movie.id} 
               deleteMovieBtn={deleteHandler}
               getMovieId={props.getMovieId}
                />
               ))
           }</tbody>
      </table>
       
      
        :   <h1 style={{fontStyle:"italic"}} >No movies found!</h1>
        
      }
    
    </section>
  )
}

export default Movieslist;

