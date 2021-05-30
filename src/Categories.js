import React from 'react'
import "./Categories.css"

function Categories() {
    return (
        <div className="categories">
            
                <div className="categorires__section">
                <img className="categories__img" src="./images/kids.jpeg"/>
                <p className="categories__name">KIDS</p>
                </div>
                <div className="categorires__section">
                <img  className="categories__img" src="./images/men.jpeg"/>
                <p className="categories__name">MENS</p>
                </div>
                <div className="categorires__section">
                <img className="categories__img" src="./images/women.jpeg"/>
                <p className="categories__name">WOMEN</p>
                </div>
                <div className="categorires__section">
                <img className="categories__img" src="./images/other.jpeg"/>
                <p className="categories__name">OTHER UTILITIES</p>
                </div>

        </div>
    )
}

export default Categories
