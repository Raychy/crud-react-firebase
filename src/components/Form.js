import React from 'react'

const Form = (props) => {
  return (
    <>
     <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
              type='text'
              id='name'
              name="name"
              value= {props.movieName}
               onChange={(e) => props.setmovieName(e.target.value)}
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
              value= {props.ratings}
             onChange={(e) => props.setRatings(e.target.value)}
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
              type='text'
              id='duration'
              name="duration"
                onChange={(e) => props.setduration(e.target.value)}
              value= {props.duration}
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
     
        </>
  )
}

export default Form