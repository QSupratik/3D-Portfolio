import styles from "./SpeechBubble.module.css";
import man from "../Images/man.png";
import { TypeAnimation } from 'react-type-animation';

function SpeechBubble() {
    return (
        <div className={styles.bubbleContainer}>
            <div className={styles.bubble}>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'We produce food for Mice',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'We produce food for Hamsters',
                        1000,
                        'We produce food for Guinea Pigs',
                        1000,
                        'We produce food for Chinchillas',
                        1000
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <img src={man} alt="man.jpg" className={styles.manImage}></img>
        </div>
    );
}

export default SpeechBubble;