import styles from "./Hero.module.css";
import SpeechBubble from "./SpeechBubble.jsx";
import {motion} from "motion/react";

import insta from "../Images/instagram.png";
import facebook from "../Images/facebook.png";
import linkedin from "../Images/linkedin.png";
import hackerrank from "../Images/hackerrank.png";
import me from "../Images/me.png";

function Hero() {
    return (
        <div className={styles.hero}>
            
            {/* Left Side of Hero Section */}
            <div className={styles.hero_left}>

                {/* Heading Section */}
                <motion.h1 className={styles.title}>
                    Hi There!
                     <br />
                    <span className={styles.name}>I am Supratik</span>
                </motion.h1>

                {/* Mid Region Text descibing Position */}
                <div className={styles.mid_text}>
                    <h2>Full Stack Developer</h2>
                    <h4>MERN Stack</h4>
                </div>

                {/* Certificate */}
                <div className={styles.certificate}>
                    <p align="center"><img src={hackerrank} align="center" alt="hackerrank_logo" className={styles.hackerrank} /></p>
                    <p align="center">HackerRank certified</p>
                    <br></br>
                    <p align="center">Software Engineer Intern</p>
                </div>
            </div>

            {/* Background Features */}
            <div className="heroBackground">
                <p align="center" className={styles.hImg}><img src={me} alt="My image"/>
                </p>
            </div>

            {/* Right Side of Hero Section */}
            <div className={styles.hero_right}>

                {/*Follow Part*/}
                <div className={styles.follow}>
                    <a href="/">
                        <img src={insta} className={styles.instagramFollowIcons}></img>
                    </a>
                    <a href="/">
                        <img src={facebook} className={styles.facebookFollowIcons}></img>
                    </a>
                    <a href="/">
                        <img src={linkedin} className={styles.linkedinFollowIcons}></img>
                    </a>
                </div>

                {/* Speech Bubble */}
                <SpeechBubble></SpeechBubble>

                {/* Contact Me */}
                <div className={styles.contact_button}>
                    <a href="/#contact">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="pink" />
                            <text x="52" y="55" textAnchor="middle" fill="black" fontSize="16" fontFamily="Arial" className={styles.circleText}>
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