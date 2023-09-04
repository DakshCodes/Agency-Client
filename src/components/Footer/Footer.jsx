import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (

        <footer class="footer">
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <div class="container-footer">
                <div class="row-footer">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <Link to={'/employes'}><li><a>about us</a></li></Link>
                            <Link to={'/'}><li><a>our services</a></li></Link>
                            <li><a >privacy policy</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a>FAQ</a></li>
                            <Link to={'/contact'}><li><a>Get Into Touch</a></li></Link>
                            <Link to={'/pricing'}><li><a href="pricing">Payment Plans</a></li></Link>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="https://www.instagram.com/valuexlabs/" target={"_blank"}><i class="ri-instagram-line"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=61550782828033&is_tour_dismissed=true" target={"_blank"}><i class="ri-facebook-line"></i></a>
                            <a href="#"><i class="ri-linkedin-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
