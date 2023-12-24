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
                        {/* {"I am currently a full time Software Engineer at Pinterest. Before Pinterest," +
                        " I've worked at Amazon and the Jonah Group. I have worked as a Full Stack developer throughout" + 
                        " my career, but now I am shifting my focus to be more on the backend side"} */}
                        {"I graduated 2 years ago with a Computer Science Specialist at the University of Toronto." + 
                        " My most recent role is as aSoftware Development Engineer at Amazon. Before Amazon," +
                        " I've worked at the Jonah Group as a Technical Developer. I have worked as a Full Stack developer throughout" + 
                        " my career, but now I am shifting my focus to be more on the backend side"}
                    </p>
                    <p>
                        {"I am also a Software Developer that loves to code during my free time! Whenever I'm free I like to build fun"
                        + " projects and explore new technologies :)"}
                    </p>
                    <Button variant='outlined' onClick={() => router.push('/projects')}><h3>Checkout my projects!</h3></Button>
                    <p>
                        {"Besides code I am also a big sports fan! I would watch any sport's that Toronto related and I play also play"
                        + " soccer every week"}
                    </p>
                </div>
            </CSSTransition>
        </div>
    );
}

export default About;
