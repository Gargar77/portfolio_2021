import React from 'react';
import './homepage.styles.scss';

import Particles from 'react-particles-js';
import {PARTICLE_PARAMS} from '../../particles';

class HomePage extends React.Component {
   
    render() {
        return (
            <div className="homepage">
               <Particles width={document.clientWidth} height={window.innerHeight - 4} params={PARTICLE_PARAMS}/>
            </div>
        );
    }
}

export default HomePage;