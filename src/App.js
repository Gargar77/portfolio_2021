import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isTransitioning:false,
      overlayPos:100
    }
  }

  animateTransitionIn = () => {
    console.log('transition IN!');
    this.setState({
        ...this.state,
        isTransitioning:true,
        overlayPos:0
    })
}

animateTransitionOut = () => {
    console.log('transition out!');
    this.setState({
        ...this.state,
        isTransitioning:false,
        overlayPos:100
    })
}

  render() {
    return(
           <div className="App">
              <div className="overlay" style={{top:`${this.state.overlayPos}vh`}}></div>
            <Switch>
              <Route exact path='/'>
                  <Homepage animatein={this.animateTransitionIn} animateout={this.animateTransitionOut}/>
              </Route>
              <Route path='/about' component={About}/>
            </Switch>
        </div>
   
    );
  }

}

export default App;
