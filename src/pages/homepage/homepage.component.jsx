import React from 'react';
import './homepage.styles.scss';

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
                <Header withSubheading titleSize={6} subtitleSize={4} klass="homepage-header" title="Gary Bautista" subtitle="Software Engineer"/>
                <div className="homepage-button-container">
                    <CustomButton buttonType="about">about</CustomButton>
                    <CustomButton buttonType="resume">resume</CustomButton>
                    <CustomButton buttonType="projects">projects</CustomButton>
                </div>
               </main>
            </div>
        );
    }
}

export default HomePage;