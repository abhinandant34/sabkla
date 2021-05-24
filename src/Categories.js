import React from 'react'
import "./Categories.css"

function Categories() {
    return (
        <div className="categories">
            
                <div className="categorires__section">
                <img className="categories__img" src="./images/kids.jpeg"/>
                <h2 className="categories__name">KIDS</h2>
                </div>
                <div className="categorires__section">
                <img  className="categories__img" src="./images/men.jpeg"/>
                <h2 className="categories__name">MENS</h2>
                </div>
                <div className="categorires__section">
                <img className="categories__img" src="./images/women.jpeg"/>
                <h2 className="categories__name">WOMEN</h2>
                </div>
                <div className="categorires__section">
                <img className="categories__img" src="./images/other.jpeg"/>
                <h2 className="categories__name">OTHER UTILITIES</h2>
                </div>

        </div>
    )
}

export default Categories
