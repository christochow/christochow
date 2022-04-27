import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ProjectDetails from '../components/ProjectDetails';
import github from '../public/github.png';
import Image from 'next/image';
import { Grid } from '@mui/material';
import styles from '../styles/Projects.module.scss';
import { projects } from '../constants/projects';

const Projects = () => {
    const [isVisible, setVisible] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);
    setTimeout(() => {
        setVisible(true);
    }, 100)
    return (
        <div className={styles.containerProjects}>
            <CSSTransition nodeRef={nodeRef} in={isVisible} timeout={1000} classNames="vertical-transition" unmountOnExit>
                <div ref={nodeRef} className={styles.projectBox}>
                    <h1>Freelance/Side Projects</h1>
                    <div className={styles.github}>
                        <h4>Github:</h4>
                        <a href="https://github.com/christochow" target="_blank" rel="noopener noreferrer">
                            <Image src={github} alt="logo" />
                        </a>
                    </div>
                    <Grid container justifyContent="center">
                        {projects.map(e => <ProjectDetails project={e} key={e.title} />)}
                    </Grid>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Projects;