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
                  <br/>
            <div className="home__row">
                 <Product 
                 id={1}
                    title="
                    himbhoosha
                    Details!!
                    Black sleek backpack. Black sleek backpack.."
                    price={499}
                    image="./images/homeproduct1.JPG"
                    rating={4}
                 />
                  <Product
                   id={2}
                    title="                    himbhoosha
                    Details!!
                    Black sleek backpack. Black sleek backpack.."
                    price={499}
                    image="./images/homeproduct1.JPG"
                    rating={2}
                 />
                  <Product 
                   id={3}
                    title="                    himbhoosha
                    Details!!
                    Black sleek backpack. Black sleek backpack.."
                    price={1299}
                    image="./images/homeproduct1.JPG"
                    rating={5}
                 />
                  <Product 
                   id={4}
                    title="                    himbhoosha
                    Details!!
                    Black sleek backpack. Black sleek backpack.."
                    price={799}
                    image="./images/homeproduct1.JPG"
                    rating={5}
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

                 <div className="home__shopbybrand__line">
                 <Shopbybrand
                      title="HIMBHOOSHA"
                      image="./images/himbhoosha.jpeg"
                  />
                  <Shopbybrand
                      title="HIMBHOOSHA"
                      image="./images/himbhoosha.jpeg"
                  />
                 </div>
                 <div className="home__shopbybrand__line">
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

        </div>
    )
}

export default Home
