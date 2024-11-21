import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
           <div className="footer-content-left">

          <p>Grow your business with us !</p>

          <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          </div>


           </div>
           <div className="footer-content-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy Policy</li>
    
                
              </ul>
           </div>
           <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
            <li>
  <a href="tel:+254745517657">+254-745-517-657</a>
</li>
                
                <li>
  <a href="tel:+254745517657">craftcodedesigners@gmail.com</a>
</li>

                
            </ul>
           </div>


        </div>
        <hr/>


        <p className='footer-copyright'>copyright 2024 &copy;craftcodedesigners-All Right Reserved</p>





    </div>
  )
}

export default Footer