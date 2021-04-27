import React from 'react';
import './homepage.styles.scss';

import Particles from 'react-particles-js';
import {PARTICLE_PARAMS} from '../../particles';
import Header from '../../components/Header/header.component';

class HomePage extends React.Component {
   
    render() {
        return (
            <div className="homepage">
               <Particles style={{filter:'blur(2px)'}} width={document.clientWidth} height={window.innerHeight - 4} params={PARTICLE_PARAMS}/>
               <Header withSubheading titleSize={6} subtitleSize={4} klass="homepage-header" title="Gary Bautista" subtitle="Software Engineer"/>
            </div>
        );
    }
}

export default HomePage;