import React from 'react'
import "../assets/styles/home.css"
import back from "../assets/image/back.png"
const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${back})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="home">
                <div className="check">
                    <h3>You got the travel plans, we got the travel vans.</h3>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                </div>
                <div className="btn">
                    <button className='button'>Find your van</button>
                </div>
            </div>
            <div className="footer">
                <p>Ⓒ 2022 #VANLIFE</p>
            </div>
        </div>
    )
}

export default Home