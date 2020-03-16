import React from 'react';
import './ContactPage.css';
import { CSSTransition } from 'react-transition-group';
import linkedIn from '../../assets/linkedin.png';


function Contact() {
    const [isVisible, setVisible] = React.useState(false);
    setTimeout(() => {
        setVisible(true);
    }, 100)
    return (
        <div className="contact-container">
            <CSSTransition in={isVisible} timeout={1000} classNames="vertical-transition" unmountOnExit>
                <div>
                    <div className="contact-wrapper">
                        <h1>Let's keep in contact!</h1>
                        <p>Find me on:</p>
                        <div>
                            <a href="https://www.linkedin.com/in/lok-man-christopher-chow/" target="_blank" rel="noopener noreferrer">
                                <img className="linkedin-logo" src={linkedIn} alt="logo" />
                            </a>
                        </div>
                        <div className="email">
                            <h4>Email:</h4> <a href="mailto:lok.chow@mail.utoronto.ca">lok.chow@mail.utoronto.ca</a>
                        </div>
                    </div>
                    <div className="declaration">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Contact;
