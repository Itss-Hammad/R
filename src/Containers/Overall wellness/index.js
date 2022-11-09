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
import therapyPic from "../../assets/images/therapy-overallwellness.svg"
import diyPic from "../../assets/images/diy-overallwellness.svg"
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc"
import genderRatio from "../../assets/images/gender-ratio-ow.svg"
import majorPp from "../../assets/images/major-pp-ow.svg"
import overallMood from "../../assets/images/oom-ow.svg"
import smileyIcon from "../../assets/images/smiley-face.svg"
import "./index.css"

function OverallWellness() {
    return (
        <div className='overall-wellness'>
            <Navbar />
            <div className='container-main'>
                <div className='first-pcmain'>
                    <h2>Struggling to Take Care of All your Employees?
                        <br />
                        <div style={{ marginTop: 25 }}></div>
                        <font className="linear-gradient-pcm">Here’s a one-stop solution!</font>
                    </h2>
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
            <div className='fourth-ovwemain'>
                <div className='container-main'>
                    <h2>How big is the problem in YOUR organisation?</h2>
                    <div className='inner-container-fovwemain'>
                        <div className='left-icfovwe'>
                            <label>Number of emloyees</label>
                            <div className='main-filler-licf'>
                                <div className='inner-mflicf'>

                                </div>
                                <div className='inner-mflicf-text'>
                                    <p>123</p>
                                </div>
                            </div>
                        </div>
                        <div className='right-icfovwe'>
                            <div className='container-progress-ricf'>
                                <label>Employees with common mental condition</label>
                                <div className='progress-bar-cpricf'>
                                    <div className='filler-pbar-cpricf'>
                                        <label>48</label>
                                    </div>
                                </div>
                            </div>
                            <div className='container-progress-ricf'>
                                <label>Employees suffering in silence</label>
                                <div className='progress-bar-cpricf'>
                                    <div className='filler-pbar-cpricf'>
                                        <label>48</label>
                                    </div>
                                </div>
                            </div>
                            <div className='container-progress-ricf'>
                                <label>Employees not showing any signs of distress</label>
                                <div className='progress-bar-cpricf'>
                                    <div className='filler-pbar-cpricf'>
                                        <label>48</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fifth-ovwemain'>
                <div className='container-main'>
                    <div className='left-fiovwe'>
                        <h2>Therapy</h2>
                        <p>All data from your team's daily check-ins gets sent into a dashboard where Kona can spot trends, warn you about burnout and prompt managers to action. Each manager can see how their team has been feeling as a group as well as individual members.</p>
                    </div>
                    <div className='right-fiovwe'>
                        <img src={therapyPic} />
                    </div>
                </div>
            </div>
            <div className='sixth-ovwemain'>
                <div className='container-main'>
                    <div className='left-sixovwe'>
                        <img src={diyPic} />
                    </div>
                    <div className='right-sixovwe'>
                        <h2>Persoanlised DIY Content</h2>
                        {window.innerWidth > 1092 ? <p>
                            Each Employee is different and needs different support to excel in their work. GoodLives offer personalized content recommendations to each individuals based on their check-ins.
                            <br />
                            Managers and HRs can see how their team is feeling as a group and what are the core issues that needs to be addressed.
                        </p> : <p>
                            All data from your team's daily check-ins gets sent into a dashboard where Kona can spot trends, warn you about burnout and prompt managers to action. Each manager can see how their team has been feeling as a group as well as individual members.
                        </p>}
                    </div>
                </div>
            </div>
            <div className='fifth-pcmain'>
                <div className='container-main'>
                    <h2>Discover What Goodlives can do for You!</h2>
                    <p>Talk to us now</p>
                    <button>Schedule Demo</button>
                </div>
            </div>
            <div className='eighth-ovwemain'>
                <div className='container-main'>
                    <h2> Mental Health Check-ins for All Teams</h2>
                    <p>The Checkins every team loves</p>
                </div>
                <div className='container-inner-eovwe'>
                    <div className='container-main'>
                        <div className='left-cieovwe'>

                        </div>
                        <div className='right-cieovwe'>
                            <h3>The Checkins every team loves</h3>
                            <p>
                                All data from your team's daily check-ins gets sent into a dashboard where Kona can spot trends, warn you about burnout and prompt managers to action. Each manager can see how their team has been feeling as a group as well as individual members.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nineth-ovwemain'>
                <div className='container-main'>
                    <h2>Get a 360 view of Employee Wellness - get more insights of different aspects of wellness</h2>
                    <div className='slider-cse-eenmain'>
                        <div className='container-scse-eenmain'>
                            <h5>Gender Ratio</h5>
                            <div className='mid-cscse-eenm'>
                                <img src={genderRatio} />
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Ensure maximum participation</label>
                                <p>Higher engagement leads to higher producitivity. Understand individual needs for different set of people and manage them effectively.</p>
                            </div>
                        </div>
                        <div className='container-scse-eenmain'>
                            <div className='mid-cscse-eenm'>
                                <img src={smileyIcon} />
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Ace the Virtual HR Game</label>
                                <p>Provide tools to employees to enhance their productivity and de-stress on a regular basis</p>
                            </div>
                        </div>
                        <div className='container-scse-eenmain'>
                            <h5>Major Pain points</h5>
                            <div className='mid-cscse-eenm'>
                                <img src={majorPp} />
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Keeping Track of Employees Wellbeing</label>
                                <p>Providing Confidential space to employee to speak freely about their concerns.</p>
                            </div>
                        </div>
                        <div className='container-scse-eenmain'>
                            <h5>Overall organization mood</h5>
                            <div className='mid-cscse-eenm'>
                                <img src={overallMood} />
                            </div>
                            <div className='bottom-cscse-eenm'>
                                <label>Identifying Core Issues</label>
                                <p>Understanding Happiness levels of Employees and providing real-time solutions to address pain-points.</p>
                            </div>
                        </div>
                    </div>
                    <div className='arrow-icons-scroller'>
                        <VscArrowLeft onClick={() => {
                            let element = document.querySelector(".slider-cse-eenmain")
                            if (window.innerWidth > 1092) {
                                element.scrollTo(element.scrollLeft - 430, 0)
                            } else {
                                element.scrollTo(element.scrollLeft - 220, 0)
                            }
                        }} />
                        <VscArrowRight onClick={() => {
                            let element = document.querySelector(".slider-cse-eenmain")
                            if (window.innerWidth > 1092) {
                                element.scrollTo(element.scrollLeft + 430, 0)
                            } else {
                                element.scrollTo(element.scrollLeft + 220, 0)
                            }
                        }} />
                    </div>
                </div>
            </div>
            <CorporateFooter />
            <Footer />
        </div>
    )
}

export default OverallWellness