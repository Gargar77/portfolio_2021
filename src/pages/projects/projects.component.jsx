import React from 'react';

import './projects.styles.scss';

import Nav from '../../components/Nav/nav.component';
import NavItem from '../../components/Nav/nav-item/nav-item.component';
import ProjectList from '../../components/project-list/project-list.component';


const Projects = (props) => (
    <div className="projects">
           <Nav>
            <NavItem redirect click={props.animate} path="/">Home</NavItem>
            <NavItem redirect click={props.animate} path="about">about</NavItem>
            <NavItem click={()=>null}>resume</NavItem>
        </Nav>
        <ProjectList/>
    </div>
);

export default Projects;