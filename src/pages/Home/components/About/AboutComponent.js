import React from 'react';
import './AboutComponent.css'
import { CSSTransition } from 'react-transition-group';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'


const About = ({ reference }) => {
    const history = useHistory();
    const [isVisible, setVisible] = React.useState(false);
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
    }, [reference]);
    return (
        <div ref={reference} className="container-intro">
            <CSSTransition in={isVisible} timeout={1000} classNames="transition" unmountOnExit>
                <div className="text-box">
                    <h1>About myself</h1>
                    <p>
                        I graduated from the University of Toronto with a Bachelors degree
                        in computer science in 2021. 
                    </p>
                    <p>
                        I am currently a Software Engineer I at Amazon.
                    </p>
                    <p>
                        I am currently a Software Engineer I at Amazon. Before Amazon, I worked as a Software Developer at the Jonah Group,
                        where I also interned for a year during University and decided to return to the company after graduating.
                        Before I started working full time, I have also worked as a Full Stack Developer for startups, as well as 
                        taking on freelance jobs while I am studying.
                    </p>
                    <p>
                        I am also a Software Developer that loves to code during my free time! Whenever I'm free I like to build fun
                        projects and explore new technologies :)
                    </p>
                    <Button className="to-project" onClick={() => history.push('/projects')}><h3>Checkout my projects!</h3></Button>
                    <p>
                        Besides code I am also a big sports fan! I would watch any sports that's Toronto related and I play also play
                        in a competitive soccer league every Sunday
                    </p>
                </div>
            </CSSTransition>
        </div>
    );
}

export default About;
