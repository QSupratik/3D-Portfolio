import styles from "./SpeechBubble.module.css";
import man from "../../Images/man.png";
import { TypeAnimation } from 'react-type-animation';

function SpeechBubble() {
    return (
        <div className={styles.bubbleContainer}>
            <div className={styles.bubble}>
                <TypeAnimation className={styles.changingText}
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Do check out my complete portfolio',
                        1500, // wait 1s before replacing "Mice" with "Hamsters"
                        'Willing to collaborate on some great project?',
                        1500,
                        'Contact me....',
                        1000
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <img src={man} alt="man.jpg" className={styles.manImage}></img>
        </div>
    );
}

export default SpeechBubble;