import React from 'react'
import { AiFillApple } from "react-icons/ai"
import { BsTwitter, BsInstagram } from "react-icons/bs"
import { ImFacebook, ImLinkedin2 } from "react-icons/im"
import { FiMail } from "react-icons/fi"

function Footer() {
    return (
        window.innerWidth < 767 ? <div className='footer-main'>
            <div className='container-main'>
                <div className='container-footer-inner firstcontainerfooter'>
                    <p className='main-fcfooter'>Ready to get started?</p>
                    <button>Get started</button>
                    <div className='address-first-cfi'>
                        <p>
                            H.No.56, Sunny Prime
                            Enclave, Dakoha,
                            Jalandhar, Punjab -
                            144023
                        </p>
                    </div>
                </div>
                <div className='container-footer-inner'>
                    <ul>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>FAQs</li>
                        <li>Blogs</li>
                    </ul>
                    <ul>
                        <li>About</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Our Team</li>
                    </ul>
                </div>
                <div className='container-footer-inner'>
                    <p className='text-cfin'>Subscribe to Our Newsletteres</p>
                    <div className='email-subscribe'>
                        <input type="text" placeholder='Enter your Email' />
                        <button>Subscribe</button>
                    </div>
                    <div className='icons-subscribe'>
                        <ImLinkedin2 />
                        <ImFacebook />
                        <BsTwitter />
                        <BsInstagram />
                    </div>
                    <div className='contact-first-cfi'>
                        <FiMail />
                        <p>contact@goodlives.in</p>
                    </div>
                </div>
            </div>
            <div className='copyright-first-cfi'>
                <p>&copy; Copyright 2022 | Goodlives</p>
            </div>
        </div> : <div className='footer-main'>
            <div className='container-main'>
                <div className='container-footer-inner firstcontainerfooter'>
                    <p className='main-fcfooter'>Ready to get started?</p>
                    <button>Get started</button>
                    <div className='address-first-cfi'>
                        <p>
                            H.No.56, Sunny Prime
                            Enclave, Dakoha,
                            Jalandhar, Punjab -
                            144023
                        </p>
                    </div>
                    <div className='contact-first-cfi'>
                        <FiMail />
                        <p>contact@goodlives.in</p>
                    </div>
                    <div className='copyright-first-cfi'>
                        <p>&copy; Copyright 2022 | Goodlives</p>
                    </div>
                </div>
                <div className='container-footer-inner'>
                    <ul>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>FAQs</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className='container-footer-inner'>
                    <ul>
                        <li>About</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Our Team</li>
                    </ul>
                </div>
                <div className='container-footer-inner'>
                    {/* <p className='heading-cfin'>Get our App</p>
                    <div className='buttons-cfin'>
                        <div className='app-store-download-bcfin'>
                            <AiFillApple />
                            <div className='text-inner-bcfin'>
                                <p>Download on the</p>
                                <p>App Store</p>
                            </div>
                        </div>
                        <div className='playstore-store-download-bcfin'>
                            <AiFillApple />
                            <div className='text-inner-bcfin'>
                                <p>GET IT ON</p>
                                <p>Google Play</p>
                            </div>
                        </div>
                    </div> */}
                    <p className='text-cfin'>Subscribe to Our Newsletteres</p>  
                    <img src='https://o.remove.bg/downloads/1d485a1f-5c59-424f-a791-9119d485e609/botones-apple-app-store-google-play-bot%C3%B3n-de-descarga-aplicaci%C3%B3n-m%C3%B3vil-con-sombra-aislado-en-un-fondo-transparente-vector-195642694-removebg-preview.png' height={"100px"}></img>
                    <div className='email-subscribe'>
                      
                        <input type="text" placeholder='Enter your Email' />
                        <button>Subscribe</button>
                    </div>
                    <div className='icons-subscribe'>
                        <ImLinkedin2 />
                        <ImFacebook />
                        <BsTwitter />
                        <BsInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer