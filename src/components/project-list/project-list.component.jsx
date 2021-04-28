import React from 'react';

import './project-list.styles.scss'

import { PROJECT_DATA } from '../../projectData';
import ProjectCard from '../project-card/project-card.component';
const ProjectList = () => (
    <div className="projects-page">
        <h1>Projects</h1>
        <div className="projects-container">
        {PROJECT_DATA.map((el,idx)=> (
            <ProjectCard key={idx} data={el}/>
        ))}
        </div>
    </div>
)

export default ProjectList;