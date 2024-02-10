import React from 'react'
import "../assets/styles/review.css"
import review from "../assets/image/Frame 27.png"
const Reviews = () => {
  return (
    <div>
      <h1 className='review'>Your Reviews</h1>
      <div className="cover">
        <img src={review} className='cover' />
      </div>
    </div>
  )
}

export default Reviews