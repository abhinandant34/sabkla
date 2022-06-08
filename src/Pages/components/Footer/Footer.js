import React from 'react'
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-section'>
            <div className='footer-section-header'>Company</div>
            <div className='section-items'>
                <div className='section-item'>Our story</div>
                <div className='section-item'>Privacy Policy</div>
                <div className='section-item'>Terms of Services</div>
                <div className='section-item'>FAQ</div>
                <div className='section-item'>Caution Notice</div>
                <div className='section-item'>Refund Policy</div>
            </div>
        </div>
        <div className='footer-section'>
        <div className='footer-section-header'>Get in Touch</div>
            <div className='section-items'>
                {/* <div className='section-item'><FontAwesomeIcon icon="envelope"/> xlmymind@gmail.com</div>
                <div className='section-item'><FontAwesomeIcon icon="phone"/> 9717830336</div> */}
            </div>
        </div>
        <div className='footer-section'>
        <div className='footer-section-header'>Connect with Us</div>
            <div className='section-items connect'>
                {/* <div className='section-item'><FontAwesomeIcon icon="fa-brands fa-linkedin" size='xl'/></div>
                <div className='section-item'><FontAwesomeIcon icon="fa-brands fa-google-plus"size='xl' /></div>
                <div className='section-item'><FontAwesomeIcon icon="fa-brands fa-facebook" size='xl' /></div>
                <div className='section-item'><FontAwesomeIcon icon="fa-brands fa-twitter-square"size='xl' /></div> */}
            </div>
        </div>
        <div className='footer-section'>
        <div className='footer-section-header'>Secure Payment Gateway</div>
            <div className='section-items'>
                <div className='section-item'>Net Banking</div>
                <div className='section-item'>PAYTM</div>

            </div>
        </div>

    </div>
  )
}

export default Footer