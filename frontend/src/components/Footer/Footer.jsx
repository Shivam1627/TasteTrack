import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo4} alt="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate doloremque autem consequuntur, ea ipsum labore suscipit tenetur consequatur. Iure repudiandae asperiores, autem sit ea placeat rem debitis vel, dolore quia dignissimos eaque! Dicta, minus.</p>
              <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />  
              </div> 
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91-9773554365</li>
                <li>contact@TasteTrack.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'> Copyright 2024 © TasteTrack.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer