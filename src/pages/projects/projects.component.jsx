import React from 'react';

import './projects.styles.scss';

import Nav from '../../components/Nav/nav.component';
import NavItem from '../../components/Nav/nav-item/nav-item.component';
import ProjectList from '../../components/project-list/project-list.component';

import Particles from 'react-particles-js';
import { PARTICLE_PARAMS } from '../../particles';

const Projects = (props) => (
    <div className="projects">
        <Particles style={{filter:'blur(3px)',position:'absolute'}} width={document.clientWidth} height={window.innerHeight - 4} params={PARTICLE_PARAMS}/>
           <Nav>
            <NavItem redirect click={props.animate} path="/">Home</NavItem>
            <NavItem redirect click={props.animate} path="about">about</NavItem>
            <NavItem click={()=>null}>resume</NavItem>
        </Nav>
        <ProjectList/>
    </div>
);

export default Projects;

