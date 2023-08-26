import React, { useState } from 'react'

const StarRating = () => {

    const [rating,setRating] = useState(2);

    const handleClick=(e)=>{
        setRating(e.target.getAttribute('data'))
    }
  return (
    <div className='container' onClick={handleClick}>
      <h1>Start Rating</h1>
      {[...new Array(5).keys()].map((i)=>(
        <span key={i} data={i + 1} className={i < rating ? "star rated" : "star"}></span>
      ))}
    </div>
  )
}

export default StarRating
