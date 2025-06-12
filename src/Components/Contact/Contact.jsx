import styles from "./Contact.module.css";

function Contact(){
    return (
        <div className={styles.contact}>
            <div className={styles.cSection}>
                <form action="submit">
                    <h1>Let's keep in touch</h1>
                    <div className={styles.formItem}>
                        <label>Name</label>
                        <input type="text" placeholder="Your name"></input>
                    </div>
                    <div className={styles.formItem}>
                        <label>Email</label>
                        <input type="email" placeholder="my@email.com"></input>
                    </div>
                    <div className={styles.formItem}>
                        <label>Message</label>
                        <textarea row={10} placeholder="Write your message..."></textarea>
                    </div>
                    <button className={styles.formButton}>Send</button>
                </form>
            </div>

            <div className={styles.cSection}>
                SVG
            </div>

        </div>
    )
}

export default Contact;