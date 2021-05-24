import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div>
            
            <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Explore</h4>
  	 			<ul>
  	 				<li><a href="#">Kids</a></li>
  	 				<li><a href="#">Men</a></li>
  	 				<li><a href="#">Women</a></li>
  	 				<li><a href="#">Other Utilities</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><FacebookIcon/></a>
  	 				<a href="#"><InstagramIcon/></a>
  	 				<a href="#"><LinkedInIcon/></a>
  	 				<a href="#"><TwitterIcon/></a>
  	 			</div>
  	 		</div>
  	 	</div>

         
  	 </div>
	   <br/>
       <div className="copyright">Copyright © Sabkla. All rights reserved</div>
  </footer>

        </div>
    )
}

export default Footer
