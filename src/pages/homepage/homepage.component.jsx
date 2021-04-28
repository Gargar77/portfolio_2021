import React from 'react';
import './homepage.styles.scss';

import { Link } from 'react-router-dom'

import Particles from 'react-particles-js';
import {PARTICLE_PARAMS} from '../../particles';
import Header from '../../components/Header/header.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class HomePage extends React.Component {

    render() {
        return (
            <div className="homepage">
               <Particles style={{filter:'blur(3px)'}} width={document.clientWidth} height={window.innerHeight - 4} params={PARTICLE_PARAMS}/>
               <main className="homepage-content">
                <Header withSubheading titleSize={6} subtitleSize={3.5} klass="homepage-header" title="Gary Bautista" subtitle="Software Engineer"/>
                <div className="homepage-button-container">
                    <CustomButton buttonType="about" animate animatein={this.props.animatein} animateout={this.props.animateout} path="/about">About</CustomButton>
                    <CustomButton buttonType="resume"><Link style={{color:'white'}}to="/resume">resume</Link></CustomButton>
                    <CustomButton buttonType="projects"><Link style={{color:'white'}}to="/projects">projects</Link></CustomButton>
                </div>
               </main>
            </div>
        );
    }
}

export default HomePage;