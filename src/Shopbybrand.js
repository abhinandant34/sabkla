import React from 'react'
import "./Shopbybrand.css"

function Shopbybrand({image,title}) {
    return (
        <div className="shopbybrand">
              <div className="brand__info">
                
                <img className="brand__image" src={image}/>
                <p className="brand__name">{title}</p>
     
        </div>
            
        </div>
    )
}

export default Shopbybrand
