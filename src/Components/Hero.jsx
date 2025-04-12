import styles from "./Hero.module.css";
import SpeechBubble from "./SpeechBubble.jsx";

import award1 from "../Images/award1.png";
import award2 from "../Images/award2.png";
import award3 from "../Images/award3.png";
import insta from "../Images/instagram.png";

function Hero() {
    return (
        <div className={styles.hero}>
            <div className="hero-left">

                <h1 className="title">
                    Hi There!
                    <br />
                    <span className="name">I am Robert</span>
                </h1>
                <h2>Top-Rated Designer</h2>
                <div className="award-list">
                    <img src={award1} alt="Awaed1" />
                    <img src={award2} alt="Awaed1" />
                    <img src={award3} alt="Awaed1" />
                </div>

            </div>

            <div className="hero-right">

                {/*Follow Part*/}
                <div className="follow">
                    <a href="/">
                        <img src={insta}></img>
                    </a>
                    {/* <a href="/">
                        <image src={github}></image>
                    </a> */}
                    {/* <a href="/">
                        <image src={linkedin}></image>
                    </a> */}
                </div>

                {/* Speech Bubble */}
                <SpeechBubble></SpeechBubble>
                <div className="certificate">
                    djsnsc
                    <br></br>
                </div>

                <div className="contact-buttons">
                    <a href="/#contact">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="pink" />
                            <text x="52" y="55" textAnchor="middle" fill="black" fontSize="16" fontFamily="Arial">
                                Contact Me!
                            </text>
                        </svg>


                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;