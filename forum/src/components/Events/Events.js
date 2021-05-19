import React,{useState} from 'react'
import './Events.css'

const Events=props=>{

    const [state,setstate]=useState(
        [
        {text:"Here is some data"},
           { text:"How you doin"}
        
        ])
    return (
        <>
        
        <div className="event-container">
        <div className="filter-blur"></div>
            <div className="event-header-container">
                <div className="event-header">
                    <p>
                        News and Events
                    </p>
                </div>
                <div className="event-list">
                    <p>
                        {state[0].text}
                    </p>
                    <p>
                        {state[1].text}
                    </p>
                </div>

            </div>

        </div>
        </>
    )
}
export default Events;