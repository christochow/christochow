import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/Overlay.module.scss';

interface Project {
    link?: string | null | undefined,
    ios?: string | null | undefined,
    android?: string | null | undefined,
    type: String
}

const ButtonStyle = {
    borderRadius: '50%',
    border: 'solid white 1px',
    width: '100px',
    height: '100px',
    color: 'white'
}

const Overlay = ({ project }: { project: Project }) => {
    const router = useRouter();
    return (
        <div>
            {
                project.type === 'tiktaktoe' ? <Button sx={ButtonStyle} onClick={() => project.link ? router.push(project.link) : null}>Link</Button>
                : project.type === 'web' ? <div className="linkContainer">
                    <Button sx={ButtonStyle} href={project.link ?? ""} target="_blank">Link to website</Button>
                </div> : <div className={styles.linkContainer}>
                    <Button sx={ButtonStyle}><a className={styles.btnLink} href={project.ios ?? ""} target="_blank" rel="noopener noreferrer">iOS</a></Button>
                    <div className={styles.space}></div>
                    <Button sx={ButtonStyle}><a className={styles.btnLink} href={project.android ?? ""} target="_blank" rel="noopener noreferrer">Android</a></Button>
                </div>
            }
        </div>
    );
}

export default Overlay;
