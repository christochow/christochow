import { useEffect, useState } from 'react';
import styles from '../styles/Contact.module.scss';
import { CSSTransition } from 'react-transition-group';
import linkedIn from '../public/linkedin.png';
import Image from 'next/image';


function Contact() {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 100);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className={styles["contact-container"]}>
            <CSSTransition in={isVisible} timeout={1000} classNames="vertical-transition" unmountOnExit>
                <div>
                    <div className={styles["contact-wrapper"]}>
                        <h1>{"Let's keep in contact!"}</h1>
                        <p>Find me on:</p>
                        <div>
                            <a href="https://www.linkedin.com/in/lok-man-christopher-chow/" target="_blank" rel="noopener noreferrer">
                                <Image className={styles["linkedin-logo"]} src={linkedIn} alt="logo" />
                            </a>
                        </div>
                        <div className={styles.email}>
                            <h4>Email:</h4> <a href="mailto:lok.chow@mail.utoronto.ca">lok.chow@mail.utoronto.ca</a>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Contact;
