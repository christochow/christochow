import React from 'react';
import './ProjectsPage.css'
import { CSSTransition } from 'react-transition-group';
import ProjectDetails from './components/ProjectDetails/ProjectDetailsComponent'

const projects = [
    [{
        title: 'I Want To Pass',
        body: 'A simple React app to help students record their course grades' +
            ' and calculate how much they need on the exam to pass a course',
        type: 'web',
        link: ''
    },
    {
        title: 'SJT Connect',
        body: 'A React-Native app developed for the St.James Town Community Center (The Corner)' +
            'The app provides up-to-date information about events in the community along side ' +
            'detailed information for each building in the area.',
        type: 'mobile',
        ios: '',
        android: ''
    }
    ],
    [{
        title: 'Watch Together',
        body: 'A React app that allows users to watch youtube videos' +
            ' at the same time with all pause/play actions synced.',
        type: 'web',
        link: ''
    },
    {
        title: 'Got Space?',
        body: 'A Flutter app to help students find study space in University libraries' +
            ' through viewing real time updates of library vacancies (submitted by users).',
        type: 'mobile',
        ios: '',
        android: ''
    }
    ]
]


function Projects(props) {
    const [isVisible, setVisible] = React.useState(false);
    setTimeout(() => {
        setVisible(true);
    }, 100)
    return (
        <div className="container-projects">
            <CSSTransition in={isVisible} timeout={1000} classNames="vertical-transition" unmountOnExit>
                <div className="text-box">
                    <h1>Projects</h1>
                    {projects.map(e => < ProjectDetails projectList={e} key={e[0].title} />)}
                </div>
            </CSSTransition>
        </div>
    );
}

export default Projects;