import React from 'react'
import bottomSign from "../assets/images/bottom-icon-cfooter.svg"
import { AiOutlineArrowUp } from "react-icons/ai"
import "./index.css"

function CorporateFooter() {
    return (
        window.innerWidth > 1092 ? <div className='corporate-footer'>
            <div className='container-main'>
                <div className='corporate-container-first'>
                    <div className='inner-cco-main'>
                        <h3>Company</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src={bottomSign} />
                        <label>Gauravi Kumari</label>
                        <label>Chairperson ThatOne Design Studio</label>
                    </div>
                    <div className='inner-cco-main'>
                        <h3>Company</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src={bottomSign} />
                        <label>Gauravi Kumari</label>
                        <label>Chairperson ThatOne Design Studio</label>
                    </div>
                </div>
                <div className='corporate-container-second'>
                    <h2>What Our Are saying about Goodlives</h2>
                    <div className='inner-cco-main'>
                        <h3>Company</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src={bottomSign} />
                        <label>Gauravi Kumari</label>
                        <label>Chairperson ThatOne Design Studio</label>
                    </div>
                    <div className='inner-cco-main'>
                        <h3>Company</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src={bottomSign} />
                        <label>Gauravi Kumari</label>
                        <label>Chairperson ThatOne Design Studio</label>
                    </div>
                </div>
                <div className='take-totop-hpmain'>
                    <div className='round-ttotop-hp' onClick={() => {
                        window.scrollTo(0, 0)
                    }}>
                        <AiOutlineArrowUp />
                    </div>
                </div>
            </div>
        </div> : <div className='corporate-footer'>
            <h2>What Our Are saying about Goodlives</h2>
            <div className='container-main'>
                <div className='corporate-container-second'>
                    <div className='inner-cco-main'>
                        <h3>Company</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src={bottomSign} />
                        <label>Gauravi Kumari</label>
                        <label>Chairperson ThatOne Design Studio</label>
                    </div>
                    <div className='inner-cco-main'>
                        <h3>Company</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src={bottomSign} />
                        <label>Gauravi Kumari</label>
                        <label>Chairperson ThatOne Design Studio</label>
                    </div>
                    <div className='inner-cco-main'>
                        <h3>Company</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src={bottomSign} />
                        <label>Gauravi Kumari</label>
                        <label>Chairperson ThatOne Design Studio</label>
                    </div>
                    <div className='inner-cco-main'>
                        <h3>Company</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src={bottomSign} />
                        <label>Gauravi Kumari</label>
                        <label>Chairperson ThatOne Design Studio</label>
                    </div>
                </div>
                {/* <div className='take-totop-hpmain'>
                    <div className='round-ttotop-hp' onClick={() => {
                        window.scrollTo(0, 0)
                    }}>
                        <AiOutlineArrowUp />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CorporateFooter