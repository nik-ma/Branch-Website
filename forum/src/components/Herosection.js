import React from 'react'
import { Link } from 'react-router-dom'
import './Herosection.css'
function Herosection() {
    return (
        <>
        {/* var imageUrl=["/competitions","/competitions","/competitions","/competitions"];
        var imageLinks=["background.jpg","robot.jpg","contact.jpg","alumni.jpg"] */}

        <video src='video.mp4'  autoPlay loop muted />
        <div className="heroContainer">

        
        <h1 className="glow">SAMANVAY 21</h1>
        <h1 className="tagline">Where  your  will  must  be  stronger  than  your  skill</h1>
        </div>
        
        <div className="Cards">

            <div className="CardItem">
               <Link to='/competitions'> <img className="imging" src="event (2).jpg" alt="electronics"  /></Link>
                    
            </div>
            <div className="CardItem">
                <img className="imging" src="third (2).jpg" alt="electronics"  />
                    
            </div>
            
            <div className="CardItem">
                <img className="imging" src="contact (2).jpg" alt="electronics"  />
                    
            </div>
            <div className="CardItem">
                <img className="imging" src="fourth (2).jpg" alt="electronics"  />
                    
            </div>
        </div>
        
        
        </>
    )
}

export default Herosection
