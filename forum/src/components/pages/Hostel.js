import React from 'react'
import '../competitions.css'
import {Link} from 'react-router-dom'
function Hostel() {
    return (
        <div className="Cards">
            <div className="cardItem">
                <Link to='/mystery'>
            <img  className="imaging1" src="murder.jpg" alt="murder"/>
            </Link>
            </div>
        </div>
    )
}

export default Hostel
