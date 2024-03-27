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
      <RatingMachine/>
    </div>
  )
}

export default StarRating

const RatingMachine = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h2>Rate this Machine:</h2>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            // className={value <= rating ? 'star filled' : 'star'}
            onClick={() => handleStarClick(value)}
          >
            {value <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      <p>You rated this machine: {rating}</p>
    </div>
  );
};
