import React from 'react'
import { Link } from 'react-router-dom'
import './Herosection.css'
function Herosection() {
    return (
        <>
        var imageUrl=["/competitions","/competitions","/competitions","/competitions"];
        var imageLinks=["background.jpg","robot.jpg","contact.jpg","alumni.jpg"]

        <video src='video-2.mp4'  autoPlay loop muted />
        <div className="heroContainer">

        
        <h1 className="glow">Samnavay 21</h1>
        <h1 className="tagline">Your limitation-it's only your imagination</h1>
        </div>
        
        <div className="Cards">

            <div className="CardItem">
               <Link to='/competitions'> <img className="imging" src="background.jpg" alt="electronics"  /></Link>
                    
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
        
        
        </>
    )
}

export default Herosection
