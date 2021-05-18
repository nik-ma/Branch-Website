import React,{useState} from 'react'
import './events.css'



const Events=props=>
{
    const [state,setstate]=useState([
        {
            text:"Hello there mate!!"
        },
        {
            text:"How you doin"
        },
        {
            text:"Hope you are doing fine"
        }
    ]
    )
    

    return (
       
        <>
        <div className="event-container">
                <div className="blur-effect"/>
                <div className="css-selector">
                <div className="event-header-text">
                    News and Events
                    
                </div>
                    </div>
                
                <div className="event-text-container">
                    
                <p>
                      {state[0].text}
                  </p>
                  <p>
                      {state[1].text}
                  </p>
                  <p>
                      {state[2].text}
                  </p>
                        
                </div>
                
            

        </div>
        </>
    )
}
export default Events;