import React from 'react'
import CorporateFooter from '../../Components/CorporateFooter'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import slacklogo from "../../assets/images/slack-logo.svg"
import headlineOne from "../../assets/images/el-corporates.svg"
import headlineTwo from "../../assets/images/ssense-corporates.svg"
import headlineThree from "../../assets/images/grip-corporates.svg"
import headlineFour from "../../assets/images/ciel-corporates.svg"
import headlineFive from "../../assets/images/skit-corporates.svg"
import effectiveTeam from "../../assets/images/effective-team.svg"
import smileyIcon from "../../assets/images/smiley-face.svg"
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc"
import arrowUp from "../../assets/images/small-arrow-up.svg"
import employeeOne from "../../assets/images/happyemployee-one.svg"
import employeeTwo from "../../assets/images/happyemployee-two.svg"
import employeeThree from "../../assets/images/happyemployee-three.svg"
import employeeFour from "../../assets/images/happyemployee-four.svg"
import "./index.css"

function EmployeeEngagement() {
    return (
        <div className='employee-engagement-main'>
            <Navbar />
            <div className='container-main'>
                <div className='first-pcmain'>
                    <h2>Upgrade your Employee <font className="linear-gradient-pcm">Experience Instantly</font></h2>
                    <p>Get the best guidance and talk to someone who understands your Mental Health status!</p>
                    <div className='schedule-input-button'>
                        <input type="text" placeholder='Enter Work Email' />
                        <button>Schedule Demo</button>
                    </div>
                    <div className='slack-container'>
                        <img src={slacklogo} alt="slack" />
                        <label>All This is possible with Our Slack integeration</label>
                    </div>
                </div>
            </div>
            <div className='second-pcmain'>
                <div className='container-main'>
                    <h2>Our Corporate Partners</h2>
                    <div className='top-icons-spcmain'>
                        <img src={headlineOne} alt="headline-image" />
                        <img src={headlineTwo} alt="headline-image" />
                        <img src={headlineThree} alt="headline-image" />
                        <img src={headlineFour} alt="headline-image" />
                        <img src={headlineFive} alt="headline-image" />
                    </div>
                </div>
            </div>
            <div className='third-pcmain'>
                <div className='container-main'>
                    <p>And, all this on auto-pilot with Smart Nudges!</p>
                    <p>Automated Nudges that build continuous feedback loops & drive positive actions together</p>
                </div>
            </div>
            <div className='fourth-eenmain'>
                <div className='container-main'>
                    <h2>Happy Employees are Productive Employees & Drive Impact</h2>
                    <p>Amber inspires honest conversations on autopilot with personalized, AI-driven surveys.</p>
                    <div className='inner-container-feenmain'>
                        <div className='ic-cont-feenmain'>
                            <img src={employeeOne} />
                            <p>2.5x greateer revenue growth</p>
                        </div>
                        <div className='ic-cont-feenmain'>
                            <img src={employeeTwo} />
                            <p>50% less absent rate</p>
                        </div>
                        <div className='ic-cont-feenmain'>
                            <img src={employeeThree} />
                            <p>40% lower employee turnover</p>
                        </div>
                        <div className='ic-cont-feenmain'>
                            <img src={employeeFour} />
                            <p>80% higher productivity</p>
                        </div>
                    </div>
                    {window.innerWidth < 1092 && (<div className='arrow-icons-scroller'>
                        <VscArrowLeft onClick={() => {
                            let element = document.querySelector(".inner-container-feenmain")
                            element.scrollTo(element.scrollLeft - 280, 0)
                        }} />
                        <VscArrowRight onClick={() => {
                            let element = document.querySelector(".inner-container-feenmain")
                            element.scrollTo(element.scrollLeft + 280, 0)
                        }} />
                    </div>)}
                </div>
            </div>
            <div className='container-main'>
                <div className='fifth-eenmain'>
                    <h2>Discover What Goodlives can do for You!</h2>
                    <p>Talk to us now</p>
                    <button>Schedule Demo</button>
                </div>
            </div>
            <div className='sixth-eenmain'>
                <h2>Effective Team Building Activities</h2>
                <p>Ensure Hollistic engagement with GoodLives</p>
                <div className='cont-slider-seenmain'>
                    <div className='slider-seenmain'>
                        <div className='container-sl-semain'>
                            <div className='image-cont-cslsem'>
                                <img src={effectiveTeam} alt="effective-team" />
                            </div>
                            <div className='content-cont-cslsem'>
                                <p>Stress Management</p>
                                <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim</p>
                            </div>
                        </div>
                        <div className='container-sl-semain'>
                            <div className='image-cont-cslsem'>
                                <img src={effectiveTeam} alt="effective-team" />
                            </div>
                            <div className='content-cont-cslsem'>
                                <p>Stress Management</p>
                                <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim</p>
                            </div>
                        </div>
                        <div className='container-sl-semain'>
                            <div className='image-cont-cslsem'>
                                <img src={effectiveTeam} alt="effective-team" />
                            </div>
                            <div className='content-cont-cslsem'>
                                <p>Stress Management</p>
                                <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim</p>
                            </div>
                        </div>
                        <div className='container-sl-semain'>
                            <div className='image-cont-cslsem'>
                                <img src={effectiveTeam} alt="effective-team" />
                            </div>
                            <div className='content-cont-cslsem'>
                                <p>Stress Management</p>
                                <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim</p>
                            </div>
                        </div>
                        <div className='container-sl-semain'>
                            <div className='image-cont-cslsem'>
                                <img src={effectiveTeam} alt="effective-team" />
                            </div>
                            <div className='content-cont-cslsem'>
                                <p>Stress Management</p>
                                <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim</p>
                            </div>
                        </div>
                        <div className='container-sl-semain'>
                            <div className='image-cont-cslsem'>
                                <img src={effectiveTeam} alt="effective-team" />
                            </div>
                            <div className='content-cont-cslsem'>
                                <p>Stress Management</p>
                                <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim</p>
                            </div>
                        </div>
                    </div>
                    <div className='arrow-icons-scroller'>
                        <VscArrowLeft onClick={() => {
                            let element = document.querySelector(".slider-seenmain")
                            element.scrollTo(element.scrollLeft - 270, 0)
                        }} />
                        <VscArrowRight onClick={() => {
                            let element = document.querySelector(".slider-seenmain")
                            element.scrollTo(element.scrollLeft + 270, 0)
                        }} />
                    </div>
                </div>
            </div>
            <div className='seventh-eenmain'>
                <div className='container-main'>
                    <h2>Get a 360 view of Employee Wellness - get more insights of different aspects of wellness</h2>
                    <div className='slider-cse-eenmain'>
                        <div className='container-scse-eenmain'>
                            <h5>Company mood</h5>
                            <div className='mid-cscse-eenm'>
                                <img src={smileyIcon} />
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Ensure maximum participation</label>
                                <p>Allows organization to address each problem differently for different set of people, helping in increasing productivity</p>
                            </div>
                        </div>
                        <div className='container-scse-eenmain'>
                            <h5>Engagement Score</h5>
                            <div className='mid-cscse-eenm'>
                                <p className='percentage-mcscse'>7.6<font style={{ fontSize: window.innerWidth < 1092 ? 18 : 38 }}>/10</font></p>
                                <p className='multi-color-mcscse'>
                                    <label><img src={arrowUp} />1.2</label>
                                    <font>since last month</font>
                                </p>
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Ace the Virtual HR Game</label>
                                <p>Provide tools to employees to enhance their productivity and de-stress on a regular basis</p>
                            </div>
                        </div>
                        <div className='container-scse-eenmain'>
                            <h5>Responce Rate</h5>
                            <div className='mid-cscse-eenm'>
                                <p className='percentage-mcscse'>69%</p>
                                <p className='multi-color-mcscse'>
                                    <label><img src={arrowUp} />1.2</label>
                                    <font>since last month</font>
                                </p>
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Ensure maximum participation</label>
                                <p>Allows organization to address each problem differently for different set of people, helping in increasing productivity</p>
                            </div>
                        </div>
                        <div className='container-scse-eenmain'>
                            <h5>Company mood</h5>
                            <div className='mid-cscse-eenm'>
                                <img src={smileyIcon} />
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Ensure maximum participation</label>
                                <p>Allows organization to address each problem differently for different set of people, helping in increasing productivity</p>
                            </div>
                        </div>
                        <div className='container-scse-eenmain'>
                            <h5>Engagement Score</h5>
                            <div className='mid-cscse-eenm'>
                                <p className='percentage-mcscse'>7.6<font style={{ fontSize: window.innerWidth < 1092 ? 18 : 38 }}>/10</font></p>
                                <p className='multi-color-mcscse'>
                                    <label><img src={arrowUp} />1.2</label>
                                    <font>since last month</font>
                                </p>
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Ace the Virtual HR Game</label>
                                <p>Provide tools to employees to enhance their productivity and de-stress on a regular basis</p>
                            </div>
                        </div>
                        <div className='container-scse-eenmain'>
                            <h5>Responce Rate</h5>
                            <div className='mid-cscse-eenm'>
                                <p className='percentage-mcscse'>69%</p>
                                <p className='multi-color-mcscse'>
                                    <label><img src={arrowUp} />1.2</label>
                                    <font>since last month</font>
                                </p>
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Ensure maximum participation</label>
                                <p>Allows organization to address each problem differently for different set of people, helping in increasing productivity</p>
                            </div>
                        </div>
                    </div>
                    <div className='arrow-icons-scroller'>
                        <VscArrowLeft onClick={() => {
                            let element = document.querySelector(".slider-cse-eenmain")
                            if (window.innerWidth > 1092) {
                                element.scrollTo(element.scrollLeft - 430, 0)
                            } else {
                                element.scrollTo(element.scrollLeft - 210, 0)
                            }
                        }} />
                        <VscArrowRight onClick={() => {
                            let element = document.querySelector(".slider-cse-eenmain")
                            if (window.innerWidth > 1092) {
                                element.scrollTo(element.scrollLeft + 430, 0)
                            } else {
                                element.scrollTo(element.scrollLeft + 210, 0)
                            }
                        }} />
                    </div>
                </div>
            </div>
            <div className='eighth-eenmain'>
                <div className='container-main'>
                    <h2>Get a 360 view of Employee Wellness - get more insights of different aspects of wellness</h2>
                    <div className='end-een-main'>
                        <h3>Additional features</h3>
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
            <CorporateFooter />
            <Footer />
        </div>
    )
}

export default EmployeeEngagement