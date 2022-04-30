import React from 'react'

const Movie = (props) => {
  return (
    <>
      <tr>
      <td className='my-3'>{props.movie.movieName}</td>
       <td className='my-0'> {props.movie.ratings}</td>
       <td className='justify-content-end'>  {props.movie.duration}</td>
       <td> 
         <button type='button ' onClick={()=> props.deleteMovieBtn(props.movie.id)} className='del-btn'> Del</button>
          &nbsp; 
       <button type='button' onClick={() => props.getMovieId(props.movie.id)} className='edit-btn'> Edit</button> 
       </td>
      </tr>
    
     </>
 
  )
}

export default Movie