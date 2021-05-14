import React from 'react'
import './Herosection.css'
function Herosection() {
    return (
        <>
        <div className="heroContainer">
        {/* <video src='video-2.mp4' autoPlay loop muted /> */}
        
        <h1 className="glow">Samnavay 21</h1>
        <h1 className="tagline">Your limitation-it's only your imagination</h1>
        <div className="Cards">
            <div className="CardItem">
                <img src="electronics.jpg" alt="electronics" style={{width:'40px'}} />
                Copmetitions
            </div>
        </div>
        
        </div>
        </>
    )
}

export default Herosection
