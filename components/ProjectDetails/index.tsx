import styles from '../../styles/ProjectDetails.module.scss';
import Overlay from '../Overlay';
import { Grid } from '@mui/material';

interface Project {
    title: String,
    body: String,
    link?: string | null | undefined,
    ios?: string | null | undefined,
    android?: string | null | undefined,
    type: String
}


const ProjectDetails = ({ project }: { project: Project }) => {
    if (!project) {
        return null;
    }
    return (
        <Grid item sm={12} md={6}>
            <div className={styles.projectsBox}>
                <div className={styles.projectDescription}>
                    <div className={styles.description}>
                        <h3>{project.title}</h3>
                        {project.body}
                    </div>
                    <div className={styles.overlay}><Overlay project={project} /></div>
                </div>
            </div>
        </Grid>
    );
}

export default ProjectDetails;
