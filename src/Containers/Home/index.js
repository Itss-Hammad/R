import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import whatsapp from "../../assets/images/whatsapp-small.svg"
import groupHealed from "../../assets/images/group-healed.svg"
import groupHealedMobileUsers from "../../assets/images/group-healed-mobile.svg"
import bannerImage from "../../assets/images/banner-image.svg"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BsStarFill } from "react-icons/bs"
import secondSectionImage from "../../assets/images/second-section-bg.svg"
import servicesImage from "../../assets/images/services-pic.svg"
import servicesImageDiy from "../../assets/images/service-diy.svg"
import servicesImageCommunity from "../../assets/images/service-community.svg"
import servicesImageWorkshop from "../../assets/images/service-workshop.svg"
import serviceCircle from "../../assets/images/services-circle.svg"
import serviceArrowMobile from "../../assets/images/services-arrow-mobile.svg"
import serviceCircleRight from "../../assets/images/services-circle-right.svg"
import anxietyImage from "../../assets/images/anxiety-relax.svg"
import anxietyImageMobile from "../../assets/images/anxiety-relax-mobile.svg"
import meditationImage from "../../assets/images/meditation-relax.svg"
import meditationImageMobile from "../../assets/images/meditation-relax-mobile.svg"
import sleepImage from "../../assets/images/sleep-relax.svg"
import sleepImageMobile from "../../assets/images/sleep-relax-mobile.svg"
import sleepImageDetailed from "../../assets/images/sleep-detailed.svg"
import sleepImageDetailedPlay from "../../assets/images/sleep-detailed-play.svg"
import anxietyDetailed from "../../assets/images/anxiety-detailed.svg"
import anxietyDetailedPlay from "../../assets/images/anxiety-detailed-play.svg"
import meditationDetailed from "../../assets/images/meditation-detailed.svg"
import meditationDetailedPlay from "../../assets/images/meditation-detailed-play.svg"
import headlineOne from "../../assets/images/dh-headline.svg"
import headlineOneMobile from "../../assets/images/dh-headline-mobile.svg"
import headlineTwo from "../../assets/images/toi-headline.svg"
import headlineTwoMobile from "../../assets/images/toi-headline-mobile.svg"
import headlineThree from "../../assets/images/midday-headline.svg"
import headlineThreeMobile from "../../assets/images/midday-headline-mobile.svg"
import headlineFour from "../../assets/images/et-headline.svg"
import headlineFourMobile from "../../assets/images/et-headline-mobile.svg"
import headlineFive from "../../assets/images/pioneer-headline.svg"
import headlineFiveMobile from "../../assets/images/pioneer-headline-mobile.svg"
import headlineSix from "../../assets/images/thewire-headlines.svg"
import headlineSixMobile from "../../assets/images/thewire-headlines-mobile.svg"
import headlineSeven from "../../assets/images/indiatoday-headlines.svg"
import headlineSevenMobile from "../../assets/images/indiatoday-headlines-mobile.svg"
import headlineEight from "../../assets/images/hindustantimes-headline.svg"
import headlineEightMobile from "../../assets/images/hindustantimes-headline-mobile.svg"
import headlineNine from "../../assets/images/indiacom-headline.svg"
import headlineNineMobile from "../../assets/images/indiacom-headline-mobile.svg"
import firstTestimonial from "../../assets/images/mohor-testimonials.svg"
import secondTestimonial from "../../assets/images/second-icon-testimonial.svg"
import thirdTestimonial from "../../assets/images/nitesh-testimonial.svg"
import fourthTestimonial from "../../assets/images/fourth-icon-testimonial.svg"
import fifthTestimonial from "../../assets/images/fifth-icon-testimonial.svg"
import peachRelax from "../../assets/images/peach-fourth-ss.svg"
import greenRelax from "../../assets/images/green-elem-svg.svg"
import greenRelaxRight from "../../assets/images/right-small-ss.svg"
import relaxationIconDesktop from "../../assets/images/relaxation-icon-desktop.svg"
import absolutewhatourusers from "../../assets/images/what-our-users-svg.svg"
import absolutewhatourusersMobile from "../../assets/images/what-our-users-svg-mobile.svg"
import starsTestimonial from "../../assets/images/stars-testimonial.svg"
import relaxationCircle from "../../assets/images/relaxation-right-circle-half.svg"
import circleRightTop from "../../assets/images/circle-right-testimonials.svg"
import talkToUs from "../../assets/images/talk-to-us.svg"
import servicesRightCircle from "../../assets/images/our-services-right-mobile.svg"
import servicesbottomleftmobile from "../../assets/images/services-bottom-left.svg"
import servicesbottomrightmobile from "../../assets/images/services-bottom-right.svg"
import rightTopRelax from "../../assets/images/right-top-relaxation-mobile.svg"
import rightBottomRelax from "../../assets/images/right-bottom-relaxation-mobile.svg"
import leftTopRelax from "../../assets/images/left-top-relaxation-mobile.svg"
import leftBottomRelax from "../../assets/images/left-bottom-relaxation-mobile.svg"
import "./index.css"
import Footer from '../../Components/Footer'
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc"

function Home() {

    const [healedAmount, setHealedAmount] = useState(Math.floor(Math.random() * 70) + 50)
    const [animateText, setAnimateText] = useState(true)
    const [serviceSelected, setServiceSelected] = useState("one-on-one")
    const [relaxation, setRelaxation] = useState("meditation")

    useEffect(() => {
        setInterval(() => {
            // setAnimateText(false)
            // setTimeout(() => {
            //     setAnimateText(true)
            //     setHealedAmount(Math.floor(Math.random() * 71) + 30)
            // }, 400);
            let element = document.querySelector(".testimonial-scrollbar-container")
            if (window.innerWidth > 767) {
                if (element.scrollLeft >= 1441) {
                    element.scrollTo(0, 0)
                } else {
                    element.scrollTo(element.scrollLeft + 620, 0)
                }
            } else {
                if (element.scrollLeft >= 636) {
                    element.scrollTo(0, 0)
                } else {
                    element.scrollTo(element.scrollLeft + 215, 0)
                }
            }
        }, 8000);
    })

    const updateRelaxType = (type) => {
        setRelaxation(type);
    }

    return (
        <div className='homepage-main'>
            <Navbar />
            <div className='first-section-hpmain'>
                <div className='container-main'>
                    <div className='left-fs-hpmain'>
                        <h2> We Will <br /> Help You</h2>
                        <p>Get the best guidance and talk to someone who understands your Mental Health status!</p>
                        <p>Trusted by more than 500k+ people</p>
                        <img src={bannerImage} alt="first-section" className='banner-image-mobile' />
                        <div className='buttons-fs-hpmain'>
                            <button>Get started</button>
                            <button>Talk to us <img src={whatsapp} /> </button>
                        </div>
                        <div className='healing-people-fshpmain'>
                            <div className='rounds-hpfs-hpmain'>
                                <img src={groupHealed} />
                            </div>
                            <div className='content-hpfs-hpmain'>
                                <div className='healamount-chpfs-hpm'>
                                    <label style={{ opacity: animateText ? 1 : 0, pointerEvents: animateText ? "all" : "none" }}>120</label>
                                    <div className='dot-healAmount' style={{ opacity: animateText ? 1 : 0, pointerEvents: animateText ? "all" : "none" }}>

                                    </div>
                                   
                                 <label>People getting Healed Now</label>
                              
                              
                            </div>
                        </div>
                         </div>
                        <div className='rating-fshpmain'>
                            <FcGoogle className='google-rfshp' />
                            <label className='star-amount'>5</label>
                            <div className='stars-rfshpmain'>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                            </div>
                            <label className='text-rfshpmain'>Ratings On Google</label>
                        </div>
                    </div>
                    <div className='right-fs-hpmain'>
                        <img src={bannerImage} alt="first-section" />
                    </div>
                </div>
            </div>
            <div className='second-section-hpmain'>
                <div className='container-main'>
                    <img src={secondSectionImage} />
                    <div className='content-ctm-sshp'>
                        <div className='why-goodlives-cont'>
                            <p>Why GoodLives?</p>
                        </div>
                        <div className='text-container-ccsshp'>
                            <p>Personalized Support</p>
                            <p>Clinically<br />Validated Solutions</p>
                            <p>Get mapped to Experts</p>
                            <p>Get Progress Tracker</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='third-section-hpmain'>
                {window.innerWidth < 1092 && <img src={servicesRightCircle} className="absolute-mob-tshpm" />}
                <h2>Our Services {window.innerWidth < 1092 && <img src={talkToUs} />}</h2>
                <div className='container-main'>
                    <div className='left-cm-tshpmain'>
                        <img src={window.innerWidth < 1092 ? serviceArrowMobile : serviceCircle} className="absolute-circle" />
                        <h3 className={serviceSelected === "one-on-one" && 'active'} onClick={() => setServiceSelected("one-on-one")}>One on One Therapy</h3>
                        <h3 className={serviceSelected === "workshops" && 'active'} onClick={() => setServiceSelected("workshops")}>Workshops</h3>
                        <h3 className={serviceSelected === "community-support" && 'active'} onClick={() => setServiceSelected("community-support")}>Community Support</h3>
                        <h3 className={serviceSelected === "diy-exercises" && 'active'} onClick={() => setServiceSelected("diy-exercises")}>DIY exercises</h3>
                        <button>Get started</button>
                    </div>
                    <div className='right-cm-tshpmain'>
                        <img src={serviceCircleRight} className="absolute-circle" />
                        <img src={servicesbottomleftmobile} className="absolute-circle-left-mob" />
                        <img src={servicesbottomrightmobile} className="absolute-circle-right-mob" />
                        <div className='inner-rcm-tshpmain'>
                            {serviceSelected === "one-on-one" && <img src={servicesImage} alt="services-image" />}
                            {serviceSelected === "workshops" && <img src={servicesImageWorkshop} alt="services-image" />}
                            {serviceSelected === "community-support" && <img src={servicesImageCommunity} alt="services-image" />}
                            {serviceSelected === "diy-exercises" && <img src={servicesImageDiy} alt="services-image" />}
                            {serviceSelected === "workshops" && <label> Are you bored of webinars? Get Effective understanding about various topics under the umbrella of mental health. This accompanied with different activities carry points, builds effective the engagement.</label>}
                            {serviceSelected === "one-on-one" && <label>Talk to our qualified therapist in a completely confidential space. 1 hour long audio/video counseling session. Get matched to the right therapist with few simple clicks</label>}
                            {serviceSelected === "community-support" && <label>We understand it must have been difficult for you to deal with overwhelming emotions. GoodLives offer plethora of opportunities to connect with people with similar struggles. You are not alone, we are here to help. :)</label>}
                            {serviceSelected === "diy-exercises" && <label>Some times, we feel the need to figure out things on our own. Take a quick test to know the status of your mental health, or Try our unique podcasts that helps you practise mindfulness.</label>}
                        </div>
                    </div>
                    {window.innerWidth < 1092 && <button>Get started</button>}
                </div>
            </div>
            <div className='fourth-section-hpmain'>
                <img src={relaxationIconDesktop} className="absolute-icon-fshpmain" />
                <img src={peachRelax} className="absolute-small-second-fshp" />
                <img src={greenRelax} className="absolute-small-third-fshp" />
                <img src={greenRelaxRight} className="absolute-small-fourth-fshp" />
                <img src={relaxationCircle} className="absolute-fifth-fshpmain" />
                <img src={circleRightTop} className="absolute-circle-top-right" />
                {window.innerWidth < 1092 && <img src={leftTopRelax} className="absolute-left-top-mob" />}
                {window.innerWidth < 1092 && <img src={leftBottomRelax} className="absolute-left-bottom-mob" />}
                {window.innerWidth < 1092 && <img src={rightTopRelax} className="absolute-right-top-mob" />}
                {window.innerWidth < 1092 && <img src={rightBottomRelax} className="absolute-right-bottom-mob" />}
                <div className='container-main'>
                    <h2>Need some relaxation? Try These</h2>
                    <div className='container-selector-fshpm'>
                        <div className={`ic-sfshpm ${relaxation === "meditation" && "active"}`} onClick={() => updateRelaxType("meditation")}>
                            <img src={window.innerWidth < 1092 ? meditationImageMobile : meditationImage} alt="meditation" />
                            <label>Meditation</label>
                        </div>
                        <div className={`ic-sfshpm ${relaxation === "anxiety" && "active"}`} onClick={() => updateRelaxType("anxiety")} >
                            <img src={window.innerWidth < 1092 ? anxietyImageMobile : anxietyImage} alt="anxiety" />
                            <label>Anxiety</label>
                        </div>
                        <div className={`ic-sfshpm ${relaxation === "sleep" && "active"}`} onClick={() => updateRelaxType("sleep")} >
                            <img src={window.innerWidth < 1092 ? sleepImageMobile : sleepImage} alt="sleep" />
                            <label>Sleep</label>
                        </div>
                    </div>
                    {relaxation === "meditation" ? <div className='audio-container-fshpm'>
                        <div className='image-container-acfshpm'>
                            <img src={meditationDetailedPlay} />
                        </div>
                        <div className='content-container-acfshpm'>
                            <label className='heading-ccacfshpm'>Calming Mins</label>
                            <label className='content-ccacfshpm'>Feel relaxed with this meditation</label>
                            <label className='timing-ccacfshpm'>2 mins</label>
                        </div>
                    </div> : relaxation === "anxiety" ? <div className='audio-container-fshpm'>
                        <div className='image-container-acfshpm'>
                            <img src={anxietyDetailedPlay} />
                        </div>
                        <div className='content-container-acfshpm'>
                            <label className='heading-ccacfshpm'>Grounding Exercise</label>
                            <label className='content-ccacfshpm'>Get mindful of your surroundings</label>
                            <label className='timing-ccacfshpm'>2 mins</label>
                        </div>
                    </div> : relaxation === "sleep" && <div className='audio-container-fshpm'>
                        <div className='image-container-acfshpm'>
                            <img src={sleepImageDetailedPlay} />
                        </div>
                        <div className='content-container-acfshpm'>
                            <label className='heading-ccacfshpm'>Sleeping sauna</label>
                            <label className='content-ccacfshpm'>Get blanket of sound sleep</label>
                            <label className='timing-ccacfshpm'>2 mins</label>
                        </div>
                    </div>}
                </div>
            </div>
            <div className='fifth-section-hpmain'>
                <img src={window.innerWidth < 1092 ? absolutewhatourusersMobile : absolutewhatourusers} className="absolute-icon-fihpmain" />
                <h2>What Our Users Say about us! <img src={window.innerWidth < 1092 ? groupHealedMobileUsers : groupHealed} /></h2>
                <div className='testimonial-scrollbar-container'>
                    <div className='container-tscont'>
                        <img src={firstTestimonial} />
                        <img src={starsTestimonial} className="stars-image" />
                        <div className='content-ctscont'>
                            <p>
                                It was a pretty good session. The therapist was understanding and personal and it felt like talking to a friend.
                                <br />
                                <label>Mohor, India</label>
                            </p>
                        </div>
                    </div>
                    <div className='container-tscont'>
                        <img src={secondTestimonial} />
                        <img src={starsTestimonial} className="stars-image" />
                        <div className='content-ctscont'>
                            <p>
                                The therapist is very helpful and an excellent listener, she has helped me enormously since I started meetings with her and very empathetic and understanding. I definitely recommend this service to anyone interested.
                                <br />
                                <label>Anonymous User, London</label>
                            </p>
                        </div>
                    </div>
                    <div className='container-tscont'>
                        <img src={thirdTestimonial} />
                        <img src={starsTestimonial} className="stars-image" />
                        <div className='content-ctscont'>
                            <p>
                                The session was well informative and the therapist was good too. It was very interactive. The therapist used some tactics to make me speak up or express.
                                <br />
                                <label>Nitesh, Canada</label>
                            </p>
                        </div>
                    </div>
                    <div className='container-tscont'>
                        <img src={fourthTestimonial} />
                        <img src={starsTestimonial} className="stars-image" />
                        <div className='content-ctscont'>
                            <p>
                                The sessions from Goodlives have helped me to let go of a bag of emotions, I was carrying around as a burden . At present I am midway through my treatment, I am already noticing positive changes in my mood and energy level.
                                <br />
                                <label>Anonymous User, India</label>
                            </p>
                        </div>
                    </div>
                    <div className='container-tscont'>
                        <img src={fifthTestimonial} />
                        <img src={starsTestimonial} className="stars-image" />
                        <div className='content-ctscont'>
                            <p>
                                You guys are really making it affordable for people like me. Felt a great sense of comfort after the session. Got some helpful feedback and points for next steps of action. Very good experience, and professional therapist.
                                <br />
                                <label>Anonymous User, Germany</label>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='arrow-icons-scroller'>
                    <VscArrowLeft onClick={() => {
                        let element = document.querySelector(".testimonial-scrollbar-container")
                        element.scrollTo(element.scrollLeft - 620, 0)
                    }} />
                    <VscArrowRight onClick={() => {
                        let element = document.querySelector(".testimonial-scrollbar-container")
                        element.scrollTo(element.scrollLeft + 620, 0)
                    }} />
                </div>
            </div>
            <div className='sixth-section-hpmain'>
                <div className='container-main'>
                    <h2>We are in Headline</h2>
                    <div className='top-icons-sshpmain'>
                        <img src={window.innerWidth < 1092 ? headlineOneMobile : headlineOne} alt="headline-image" />
                        <img src={window.innerWidth < 1092 ? headlineTwoMobile : headlineTwo} alt="headline-image" />
                        <img src={window.innerWidth < 1092 ? headlineThreeMobile : headlineThree} alt="headline-image" />
                        <img src={window.innerWidth < 1092 ? headlineFourMobile : headlineFour} alt="headline-image" />
                        <img src={window.innerWidth < 1092 ? headlineFiveMobile : headlineFive} alt="headline-image" />
                    </div>
                    <div className='bottom-icons-sshpmain'>
                        <img src={window.innerWidth < 1092 ? headlineSixMobile : headlineSix} alt="headline-image" />
                        <img src={window.innerWidth < 1092 ? headlineSevenMobile : headlineSeven} alt="headline-image" />
                        <img src={window.innerWidth < 1092 ? headlineEightMobile : headlineEight} alt="headline-image" />
                        <img src={window.innerWidth < 1092 ? headlineNineMobile : headlineNine} alt="headline-image" />
                    </div>
                </div>
            </div>
            <div className='take-totop-hpmain'>
                <div className='container-main'>
                    <div className='round-ttotop-hp' onClick={() => {
                        window.scrollTo(0, 0)
                    }}>
                        <AiOutlineArrowUp />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home