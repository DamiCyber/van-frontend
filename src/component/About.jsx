import React from 'react'
import "../assets/styles/about.css"
import backme from "../assets/image/backs.png"

const About = () => {
  return (
    <div>
      <div className="images">
        <img src={backme} alt="" />
      </div>
      <div className="text">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
      </div>
      <div className="textmini">
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className="textall">
        <div className="txt">
          <h1>Your destination is waiting.
            Your van is ready.</h1>
          <button className='mtn'>Explore our vans</button>
        </div>
      </div>
      <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </div>
  )
}

export default About