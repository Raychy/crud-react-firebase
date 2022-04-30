/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import MovieDatServie from "../services/book-service"


function Movieform({id, setMovieId}) {
  const [movieName,setmovieName] = useState(''),
        [ratings, setRatings] = useState(''),
        [duration, setduration] = useState(''),
        [message, setMessage] = useState({ error: false, msg: "" });
  
  const dismissMessage =()=>{
          const timer = setTimeout(() => {
            // console.log('This will run after 1 second!')
            setMessage("");
          }, 2500);
          return () => clearTimeout(timer);
        }

  const handleMovieSubmit = async (e) =>{
    e.preventDefault();
    setMessage("");
    if(movieName ==='' && ratings === '' && duration === ''){
      setMessage({error:true, msg:"All fields are mandatory"})
      dismissMessage()
    }

      else{
             const newMovie = {
      movieName,
      ratings,
      duration
    }
        try{
         
          if(id !== undefined && id !==""){
            await MovieDatServie.updateMovie(id, newMovie)
            setMovieId("");
            setMessage({ error: false, msg: "Updated successfully!" });
            dismissMessage()
          }
          else{
            // console.log(newMovie);
            await MovieDatServie.addMovies(newMovie);
            setMessage({ error: false, msg: "New Book added successfully!" });
            dismissMessage()
           
          }
         
         }catch(error){
          setMessage({ error: true, msg: error.message });
          dismissMessage()
         }
       setmovieName('');
       setRatings('');
       setduration('')
      }

  }; 

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await MovieDatServie.getMovie(id);
      // console.log("the record is :", docSnap.data());
      setmovieName(docSnap.data().movieName);
      setRatings(docSnap.data().ratings);
      setduration(docSnap.data().duration);
    } catch (error) {
      console.error(error);
      setMessage({ error: true, msg: error.message });
      dismissMessage()
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
    {/* {!editing &&  */}
    <section className='movie-form-card '>
   
      <div className='form'>
      {message?.msg && ( 
          <div className={ message?.error ? "alert__msg--error" : "alert__msg--success"}  
          onClick={()=>setMessage("")}>
         {message?.msg}
          </div>
        )}
      
                <form onSubmit={handleMovieSubmit} className="">
                <h2>Add New Movie </h2>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
              type='text'
              id='name'
              name="name"
              value= {movieName}
               onChange={(e) => setmovieName(e.target.value)}
              placeholder='Enter Movie Name'
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input
              type='number'
              id='ratings'
              name= "ratings"
              value= {ratings}
             onChange={(e) => setRatings(e.target.value)}
              placeholder='Enter Rating on a scale of 1 to 100'
              min={1}
              max={100}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
              type='text'
              id='duration'
              name="duration"
                onChange={(e) => setduration(e.target.value)}
              value= {duration}
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
      
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
            >
              Add / Update Movie
            </button>
          </div>
        </form>
        {/* update form movie */}

      </div>
    </section>
    {/* } */}
    </>
  )
}

export default Movieform
