import React from 'react';
import './AboutPage.css'
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';


function About(props) {
    const [isVisible, setVisible] = React.useState(false);
    const reference = React.useRef(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.unobserve(reference.current);
                }
            });
        });
        observer.observe(reference.current);
        const oldVal = reference.current;
        return () => observer.unobserve(oldVal);
    });
    return (
        <div ref={reference} className="container-intro">
            <CSSTransition in={isVisible} timeout={1000} classNames="transition" unmountOnExit>
                <div className="text-box">
                    <h1>About myself</h1>
                    <p>
                        I am currently a 3rd year Computer Science Student at the University of Toronto.
                        Right now I am taking a gap year as a PEY (Professional Experience Year) co-op Technical Developer
                        at the Jonah Group.
                    </p>
                    <p>
                        I am also a Software Developer that loves to code during my free time! Whenever I'm free I like to build fun
                        projects and explore new technologies :)
                    </p>
                    <button className="to-project"><NavLink to='/projects'><h3>Checkout my projects!</h3></NavLink></button>
                    <p>
                        Besides code I am also a big sports fan! I would watch any sports that's Toronto related and I play also play
                        in a semi-pro soccer league every Sunday
                    </p>
                </div>
            </CSSTransition>
        </div>
    );
}

export default About;
