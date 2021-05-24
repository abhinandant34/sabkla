import React from 'react'
import './Home.css'
import Slideshow from './Slideshow'
import Product from './Product'
import Categories from './Categories'
import Shopbybrand from './Shopbybrand'

function Home() {
    return (
        <div className="home">

            <div className="home__container">

              {/*Slideshow*/}

            <Slideshow/>

            <h2 className="home__nowternding">Now Trending</h2>

            <div className="home__row">
                 <Product 
                    title="
                    himbhoosha
                    Details!!
                    Black sleek backpack. Black sleek backpack.."
                    price={499}
                    image="./images/homeproduct1.JPG"
                    rating={4}
                 />
                  <Product 
                    title="                    himbhoosha
                    Details!!
                    Black sleek backpack. Black sleek backpack.."
                    price={499}
                    image="./images/homeproduct1.JPG"
                    rating={4}
                 />
                  <Product 
                    title="                    himbhoosha
                    Details!!
                    Black sleek backpack. Black sleek backpack.."
                    price={499}
                    image="./images/homeproduct1.JPG"
                    rating={4}
                 />
                  <Product 
                    title="                    himbhoosha
                    Details!!
                    Black sleek backpack. Black sleek backpack.."
                    price={499}
                    image="./images/homeproduct1.JPG"
                    rating={4}
                 />
             
            </div>

                <br/><br/>
            <h2 className="home__categoriesheading">Categories</h2>
            <br/>
            <div className="home__categories">

                      <Categories/>

            </div>
            <br/>
            <h2 className="home__shopbybrandheading"> Shop by Brand</h2>
            <br/>
                <div className="home__shopbybrand">

                  <Shopbybrand
                      title="HIMBHOOSHA"
                      image="./images/himbhoosha.jpeg"
                  />
                  <Shopbybrand
                      title="HIMBHOOSHA"
                      image="./images/himbhoosha.jpeg"
                  />
                  <Shopbybrand
                      title="HIMBHOOSHA"
                      image="./images/himbhoosha.jpeg"
                  />
                  <Shopbybrand
                      title="HIMBHOOSHA"
                      image="./images/himbhoosha.jpeg"
                  />

                </div>
               

            </div>

        </div>
    )
}

export default Home
