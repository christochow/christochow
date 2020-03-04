import React, { useEffect, useState } from 'react';
import './ProjectDetailsComponent.css'
import Overlay from '../Overlay/OverlayComponent';


function ProjectDetails(props) {
    const [projectList, setList] = useState([]);
    useEffect(() => {
        setList(props.projectList);
        return () => {}
    }, [props.projectList])
    if(projectList.length === 0){
        return (<div></div>)
    }
    return (
        <div className="container-project">
            <div className="projects-box">
                <div className="project-description">
                    <div className="description">
                    <h3>{projectList[0].title}</h3>
                    {projectList[0].body}
                    </div>
                    <div className="overlay"><Overlay/></div>
                </div>
                {projectList.length === 2 && <div className="project-description">
                    <div className="description">
                    <h3>{projectList[1].title}</h3>
                    {projectList[1].body}
                    </div>
                    <div className="overlay"><Overlay/></div>
                </div>}
            </div>
        </div>
    );
}

export default ProjectDetails;
