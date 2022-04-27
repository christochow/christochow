import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.scss';
import Button from '@mui/material/Button';


const About = (props: any) => {
    const router = useRouter();
    const [isVisible, setVisible] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.unobserve(props.reference.current);
                }
            });
        });
        observer.observe(props.reference.current);
        const oldVal = props.reference.current;
        return () => observer.unobserve(oldVal);
    });
    return (
        <div ref={props.reference} className={styles.containerIntro}>
            <CSSTransition nodeRef={nodeRef} in={isVisible} timeout={1000} classNames="transition" unmountOnExit>
                <div ref={nodeRef} className={styles.textBox}>
                    <h1>About myself</h1>
                    <p>
                        I recently graduated with a Computer Science Specialist at the University of Toronto. I am
                        currently a full time Technical Developer at the Jonah Group.
                    </p>
                    <p>
                        {"I am also a Software Developer that loves to code during my free time! Whenever I'm free I like to build fun"
                        + " projects and explore new technologies :)"}
                    </p>
                    <Button variant='outlined' onClick={() => router.push('/projects')}><h3>Checkout my projects!</h3></Button>
                    <p>
                        {"Besides code I am also a big sports fan! I would watch any sport's that Toronto related and I play also play"
                        + " in an amateur soccer league every Sunday"}
                    </p>
                </div>
            </CSSTransition>
        </div>
    );
}

export default About;
