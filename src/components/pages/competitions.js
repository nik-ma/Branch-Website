import React from 'react'
import '../competitions.css'
import '../Herosection.css'
import {Link} from 'react-router-dom'
function competitions() {
    return (
        <>
        <div className="Main-container">
            <h1 className="title">
                EVENTS
            </h1>
            
        </div>
        <div className="Cards">
        <div className="CardItem">
           <Link to='/competitions'> <img className="imaging1" src="background.jpg" alt="electronics"  /></Link>
                
        </div>
        <div className="CardItem">
            <img className="imaging1" src="robot.jpg" alt="electronics"  />
                
        </div>
        
        <div className="CardItem">
            <img className="imaging1" src="contact.jpg" alt="electronics"  />
                
        </div>
        <div className="CardItem">
            <img className="imaging1" src="alumni.jpg" alt="electronics"  />
                
        </div>
    </div>
    </>
    )
}

export default competitions
