import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import slacklogo from "../../assets/images/slack-logo.svg"
import headlineOne from "../../assets/images/el-corporates.svg"
import headlineTwo from "../../assets/images/ssense-corporates.svg"
import headlineThree from "../../assets/images/grip-corporates.svg"
import headlineFour from "../../assets/images/ciel-corporates.svg"
import headlineFive from "../../assets/images/skit-corporates.svg"
import thirdTestimonial from "../../assets/images/nitesh-testimonial.svg"
import feelingIcon from "../../assets/images/feeling-logo-icon.svg"
import sentimentImage from "../../assets/images/sentiment-image.svg"
import secondCheckinLogo from "../../assets/images/second-checkin.svg"
import thirdCheckinLogo from "../../assets/images/third-checkin.svg"
import fourthCheckinLogo from "../../assets/images/fourth-checkin.svg"
import "./index.css"
import CorporateFooter from '../../Components/CorporateFooter'

function PulseCheckIn() {
    const [checkIns, setCheckIn] = useState("survey")

    return (
        <div className='pulse-checkin-main'>
            <Navbar />
            <div className='container-main'>
                <div className='first-pcmain'>
                    <h2>Don't know How To check-in on <font className="linear-gradient-pcm">Employees Every Single Day?</font></h2>
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
            <div className='fourth-pcmain'>
                <div className='container-main'>
                    <div className='left-pcmain'>
                        <h2>Get everyday insights on how they are doing and who needs more attention!</h2>
                        <p>All data from your team's daily check-ins gets sent into a dashboard where Kona can spot trends, warn you about burnout and prompt managers to action. Each manager can see how their team has been feeling as a group as well as individual members.</p>
                    </div>
                    <div className='right-pcmain'>
                        <div className='container-rpcmain'>
                            <div className='inner-crpcmain'>
                                <img src={thirdTestimonial} />
                                <div className='text-icrpcmain'>
                                    <p>Gaurav is feeling <label className='feeling-txicro'>Frustrated</label></p>
                                    <p>Lorem ipsum doler sit emet</p>
                                </div>
                            </div>
                        </div>
                        <div className='container-rpcmain' style={{ justifyContent: "flex-end" }}>
                            <div className='inner-crpcmain'>
                                <img src={thirdTestimonial} />
                                <div className='text-icrpcmain'>
                                    <p>Gaurav is feeling <label className='feeling-txicro'>Frustrated</label></p>
                                    <p>Lorem ipsum doler sit emet</p>
                                </div>
                            </div>
                        </div>
                        <div className='container-rpcmain'>
                            <div className='inner-crpcmain'>
                                <img src={thirdTestimonial} />
                                <div className='text-icrpcmain'>
                                    <p>Gaurav is feeling <label className='feeling-txicro'>Frustrated</label></p>
                                    <p>Lorem ipsum doler sit emet</p>
                                </div>
                            </div>
                        </div>
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
            <div className='sixth-pcmain'>
                <div className='container-main'>
                    <h2>The check-ins designed to build Trust</h2>
                    <p>Amber inspires honest conversations on autopilot with personalized, AI-driven surveys.</p>
                    <div className='tabs-spcmain'>
                        <div className={`tabs-inner-spcm ${checkIns === "check-in" && "active"}`} onClick={() => setCheckIn("check-in")}>
                            <p>Check-ins</p>
                        </div>
                        <div className={`tabs-inner-spcm ${checkIns === "survey" && "active"}`} onClick={() => setCheckIn("survey")}>
                            <p>Survey</p>
                        </div>
                        <div className={`tabs-inner-spcm ${checkIns === "feedback" && "active"}`} onClick={() => setCheckIn("feedback")}>
                            <p>Feedback</p>
                        </div>
                    </div>
                    <div className={`tabs-detailed-spcmain ${checkIns === "survey" ? "survey-tdspc" : checkIns === "feedback" ? "feedback-tdspc" : "checkin-tdspc"}`}>
                        {checkIns === "survey" ? <div className='left-tdspcmain'>
                            <div className='top-container-ltdspcm'>
                                <img src={feelingIcon} />
                                <div className='container-tctltd'>
                                    <p>How are you feeling ?</p>
                                </div>
                            </div>
                            <div className='checks-container-ltdspcm'>
                                <div className='container-cctltd'>
                                    <input type="checkbox" name="checkboxlorem" />
                                    <label>Lorem ipsum dolar sit me</label>
                                </div>
                                <div className='container-cctltd'>
                                    <input type="checkbox" checked readOnly name="checkboxlorem" />
                                    <label>Lorem ipsum dolar sit me</label>
                                </div>
                                <div className='container-cctltd'>
                                    <input type="checkbox" name="checkboxlorem" />
                                    <label>Lorem ipsum dolar sit me</label>
                                </div>
                                <div className='container-cctltd'>
                                    <input type="checkbox" name="checkboxlorem" />
                                    <label>Lorem ipsum dolar sit me</label>
                                </div>
                            </div>
                        </div> : checkIns === "feedback" ? <div className='left-tdspcmain ltds-feedback'>
                            <div className='container-rci-evpc' style={{ justifyContent: window.innerWidth > 1092 && "center" }}>
                                <div className='inner-crci-evpc'>
                                    <img src={thirdTestimonial} />
                                    <div className='content-icrci-evpc'>
                                        <p>Lorem ipsum Doler sit met</p>
                                        <p>Lorem ipsum Doler sit met</p>
                                    </div>
                                </div>
                            </div>
                            <div className='container-rci-evpc' style={{ justifyContent: window.innerWidth > 1092 && "flex-end" }}>
                                <div className='inner-crci-evpc'>
                                    <img src={thirdTestimonial} />
                                    <div className='content-icrci-evpc'>
                                        <p>Lorem ipsum Doler sit met</p>
                                        <p>Lorem ipsum Doler sit met</p>
                                    </div>
                                </div>
                            </div>
                            <div className='container-rci-evpc'>
                                <div className='inner-crci-evpc'>
                                    <img src={thirdTestimonial} />
                                    <div className='content-icrci-evpc'>
                                        <p>Lorem ipsum Doler sit met</p>
                                        <p>Lorem ipsum Doler sit met</p>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className='left-tdspcmain ltds-checkin'>
                            <div className='top-container-ltdspcm' style={{ marginBottom: 17 }}>
                                <img src={feelingIcon} />
                                <div className='container-tctltd' style={{ maxWidth: window.innerWidth < 1092 && 134 }}>
                                    <p>We are going to redesign signal</p>
                                </div>
                            </div>
                            <div className='top-container-ltdspcm' style={{ marginBottom: 34, justifyContent: "flex-end" }}>
                                <div className='container-tctltd' style={{ marginLeft: 0, marginRight: 8, maxWidth: window.innerWidth < 1092 && 152 }}>
                                    <p>It is a great idea , we wil love to seeit</p>
                                </div>
                                <img src={secondCheckinLogo} />
                            </div>
                            <div className='top-container-ltdspcm' style={{ marginBottom: 17 }}>
                                <img src={thirdCheckinLogo} />
                                <div className='container-tctltd' style={{ height: window.innerWidth > 1092 ? 104 : 50, backgroundColor: "#F7F7F8", maxWidth: window.innerWidth < 1092 && 133 }}>
                                    {window.innerWidth > 1092 ? <p style={{ maxWidth: 191, color: "rgba(0,0,0,0.6)" }}>Lets do it groups , share your workspace . we would like to collaborate with your projects</p> : <p style={{ maxWidth: 191, color: "rgba(0,0,0,0.6)" }}>Lets do it groups , share your workspace . we would  </p>}
                                </div>
                            </div>
                            <div className='top-container-ltdspcm' style={{ justifyContent: "flex-end" }}>
                                <div className='container-tctltd' style={{ height: window.innerWidth > 1092 ? 104 : 44, marginLeft: 0, marginRight: 8, maxWidth: window.innerWidth < 1092 && 136, backgroundColor: "#EDEEF7" }}>
                                    {window.innerWidth > 1092 ? <p style={{ maxWidth: 191, color: "rgba(0,0,0,0.6)" }}>Are there any plans to update the app, visually, anytime soon? Compared to apps like Android Messages, Signal just doesn't exactly look "modern"</p> : <p style={{ maxWidth: 191, color: "rgba(0,0,0,0.6)" }}>Are there any plans to update the app, visually, anytime soon? </p>}
                                </div>
                                <img src={fourthCheckinLogo} />
                            </div>
                        </div>}
                        <div className='right-tdspcmain'>
                            <div className='inner-container-rtdspc'>
                                <h3>Heading1</h3>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                            <div className='inner-container-rtdspc'>
                                <h3>Heading2</h3>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='seventh-pcmain'>
                <div className='container-main'>
                    <h2 className='heading-spcmain'>Get Real-time insights</h2>
                    <p className='para-spcmain'>Trends that helps the managers</p>
                    {window.innerWidth > 1092 && <label className='label-spcmain'>Trending Sentiment</label>}
                    <div className='container-inner-svpcmain'>
                        <div className='left-cinner-svpcmain'>
                            <h2>Get everyday insights on how they are doing and who needs more attention!</h2>
                            <p>All data from your team's daily check-ins gets sent into a dashboard where Kona can spot trends, warn you about burnout and prompt managers to action. Each manager can see how their team has been feeling as a group as well as individual members.</p>
                        </div>
                        <div className='right-cinner-svpcmain'>
                            {window.innerWidth < 1092 && <label className='label-spcmain'>Trending Sentiment</label>}
                            <img src={sentimentImage} alt="sentimentImage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='eighth-pcmain'>
                <div className='container-main'>
                    {window.innerWidth > 1092 && <label className='label-spcmain'>Trending Feedbacks</label>}
                    <div className='container-inner-svpcmain'>
                        <div className='left-cinner-svpcmain'>
                            <h2>Get everyday insights on how they are doing and who needs more attention!</h2>
                            <p>All data from your team's daily check-ins gets sent into a dashboard where Kona can spot trends, warn you about burnout and prompt managers to action. Each manager can see how their team has been feeling as a group as well as individual members.</p>
                        </div>
                        <div className='right-cinner-svpcmain'>
                            {window.innerWidth < 1092 && <label className='label-spcmain'>Trending Feedbacks</label>}
                            <div className='container-rci-evpc' style={{ justifyContent: window.innerWidth > 1092 && "center" }}>
                                <div className='inner-crci-evpc'>
                                    <img src={thirdTestimonial} />
                                    <div className='content-icrci-evpc'>
                                        <p>Lorem ipsum Doler sit met</p>
                                        <p>Lorem ipsum Doler sit met</p>
                                    </div>
                                </div>
                            </div>
                            <div className='container-rci-evpc' style={{ justifyContent: window.innerWidth > 1092 && "flex-end" }}>
                                <div className='inner-crci-evpc'>
                                    <img src={thirdTestimonial} />
                                    <div className='content-icrci-evpc'>
                                        <p>Lorem ipsum Doler sit met</p>
                                        <p>Lorem ipsum Doler sit met</p>
                                    </div>
                                </div>
                            </div>
                            <div className='container-rci-evpc'>
                                <div className='inner-crci-evpc'>
                                    <img src={thirdTestimonial} />
                                    <div className='content-icrci-evpc'>
                                        <p>Lorem ipsum Doler sit met</p>
                                        <p>Lorem ipsum Doler sit met</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CorporateFooter />
            <Footer />
        </div>
    )
}

export default PulseCheckIn