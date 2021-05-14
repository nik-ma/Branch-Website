import React from 'react'
import './Herosection.css'
function Herosection() {
    return (
        <>
        <div className="heroContainer">
            
        {/* <video src='video-2.mp4'  autoPlay loop muted /> */}
        <h1 className="glow">Samnavay 21</h1>
        <h1 className="tagline">Your limitation-it's only your imagination</h1>
        
        
        <div className="Cards">
            <div className="CardItem">
                <img className="imging" src="electronics.jpg" alt="electronics"  />
                    
            </div>
            <div className="CardItem">
                <img className="imging" src="robot.jpg" alt="electronics"  />
                    
            </div>
            
            <div className="CardItem">
                <img className="imging" src="contact.jpg" alt="electronics"  />
                    
            </div>
            <div className="CardItem">
                <img className="imging" src="alumni.jpg" alt="electronics"  />
                    
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Herosection
