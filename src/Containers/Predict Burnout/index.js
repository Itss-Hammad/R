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
import levelsBurnout from "../../assets/images/burnout-levels.svg"
import unhappyEmployement from "../../assets/images/unhappy-employee.svg"
import "./index.css"

function PredictBurnout() {
    return (
        <div className='predict-burnout'>
            <Navbar />
            <div className='container-main'>
                <div className='first-pcmain'>
                    <h2 style={{ maxWidth: 569 }}>Predict Employee <font className="linear-gradient-pcm">Burnout Levels</font></h2>
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
                    {window.innerWidth < 1092 ? <p>Still working with ad-hoc pulse surveys & struggling to drive response rates?</p> : <p>Still trying to predict Employee Burnout & struggling to drive response rates?</p>}
                    <p>Get over them We've got an automated chatbot solution for you!</p>
                </div>
            </div>
            <div className='fourth-prbumain'>
                <div className='container-main'>
                    <div className='left-fprbumain'>
                        <h2>Get Actionable insights and Dashboards</h2>
                        <p>
                            All data from your team's daily check-ins gets sent into a dashboard where Kona can spot trends, warn you about burnout and prompt managers to action. Each manager can see how their team has been feeling as a group as well as individual members.
                        </p>
                    </div>
                    <div className='right-fprbumain'>
                        <img src={levelsBurnout} />
                    </div>
                </div>
            </div>
            <div className='container-main'>
                <div className='fifth-eenmain'>
                    <h2>Discover What Goodlives can do for You!</h2>
                    <p>Talk to us now</p>
                    <button>Schedule Demo</button>
                </div>
            </div>
            <div className='sixth-prbumain'>
                <div className='container-main'>
                    <div className='left-sprbu'>
                        <img src={unhappyEmployement} />
                    </div>
                    <div className='right-sprbu'>
                        <h2>Reduce<br />unwanted attrition</h2>
                        <p>All data from your team's daily check-ins gets sent into a dashboard where Kona can spot trends, warn you about burnout and prompt managers to action. Each manager can see how their team has been feeling as a group as well as individual members.</p>
                    </div>
                </div>
            </div>
            <div className='seventh-prbumain'>
                <div className='container-main'>
                    <h2>What is employee burnout & signs</h2>
                    <div className='inner-container-sprbumain'>
                        <div className='cont-icon-sprb'>
                            <h3>Heading</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className='cont-icon-sprb'>
                            <h3>Heading</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className='cont-icon-sprb'>
                            <h3>Heading</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <CorporateFooter />
            <Footer />
        </div>
    )
}

export default PredictBurnout