import React from 'react'
import about_banner from './images/about_bg.jpg'
import founder_b from './images/co-founder-b.jpg'
import founder_a from './images/co-founder-a.jpg'
import './About.css'

function About() {
  return (
    <div>
        <img src={about_banner} style={{width:'100%'}}/>
        <div className='about-content'>
            <div className='about-vision'>
              <div className='about-heading'>
                Vision
              </div>
              Our mission is to develop and socialise accelerated learning platforms such that the global methods of primary education
              are no longer just for the privilege few, but also for children from all walks of life.<br/><br/>
              We aim to encourage children to move away from the traditional 'learning by heart' and apply primary concepts in a fun 
              and structured approach.<br/><br/>
              Core to this is the continuous innovation in primary education via e-learning technologies.
            </div>
            <div className='about-principles'>
              <div className='about-heading'>Principles</div>
              <ul>
                <li>Children at the forefront</li>
                <li>Foster 'Out of the Box' thinking</li>
                <li>Focus on practical application</li>
                <li>Social Equality in primary education</li>
              </ul>
          </div>

        </div>
        <div className='about-founder'>
          <div className='founder'>
            <div className='about-heading'>
            Rahul Malhotra  
            </div>
            <div className='founder-info'>
              <img src={founder_b} style={{width:'20%', height:'40%', margin:'1vh 1vw'}}/>
             <div>
             Rahul is the founding partner of XLMYMIND. A Chartered Accountant and a SRCC Alum, Rahul has spent 20 years in business
              transformation across financial services industry globally. His passion towards contemporary teaching methods and social 
              equality to primary education has been the major driver behind the launch of XLMYMIND.
             </div>
            </div>
          </div>
          <div className='founder'>
            <div className='about-heading'>
            Divya Sheth Mathur
            </div>
            <div className='founder-info'>
              <img src={founder_a} style={{width:'20%', height:'40%', margin:'1vh 1vw'}}/>

             <div>
             Divya is a co-founding partner of XLMYMIND. By profession she is the owner of a Jewelry manufacturing and retail company.
             But it is her passion for kids and their long term development that drove her to co-found a product that focuses on 
             practical stimulative learning.
             </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About