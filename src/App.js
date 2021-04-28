import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Projects from './pages/projects/projects.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isTransitioning:false,
      overlayPos:100
    }
  }

  animateTransitionIn = () => {
    this.setState({
        ...this.state,
        isTransitioning:true,
        overlayPos:0
    })
}

animateTransitionOut = () => {
    this.setState({
        ...this.state,
        isTransitioning:false,
        overlayPos:100
    })
}

animateTransition =  () => {
  this.animateTransitionIn();
  setTimeout(this.animateTransitionOut,1000)
}

  render() {
    return(
           <div className="App">
              <div className="overlay" style={{top:`${this.state.overlayPos}vh`}}></div>
            <Switch>
              <Route exact path='/'>
                  <Homepage animate={this.animateTransition}/>
              </Route>
              <Route path='/about'>
                <About animate={this.animateTransition}/>
              </Route>
              <Route path="/projects">
                <Projects animate={this.animateTransition}/>
              </Route>  
            </Switch>
        </div>
   
    );
  }

}

export default App;
