import React from 'react';

import './about.styles.scss';

import Nav from '../../components/Nav/nav.component';
import NavItem from '../../components/Nav/nav-item/nav-item.component';
import profilePicture from '../../assets/gary_cutout_web.jpg';
import { downloadResume } from '../../downloadResume';

const About = (props) => {
   
    return (
        <div className="about-container">
            <Nav>
                <NavItem redirect click={props.animate} path="/">Home</NavItem>
                <NavItem click={downloadResume}>Resume</NavItem>
                <NavItem redirect click={props.animate} path="projects">projects</NavItem>
            </Nav>
            <main>
                <div className="text-frame">
                    <h1>About me</h1>
                    <p className="bio">
                    Since I was a little boy, I've dreamt of making an impact in the world. I never really knew how, but I made a promise to myself that I would make the world a better place in some way. The year 2020 was a year that the world would not forget, especially for me, because that is the year that led me to discover my passion for computer science. 2020 also taught me how to take my love for art and programming to create attractive business and consumer applications for mobile and the web. I use my design skills to give a unique UI/ UX to all my projects. My work as a freelance developer, a business owner, and a hospitality professional has led me to where I am today, in that I know I can make an extraordinary impact on the lives of many.
                    </p>
                    <p className="quote">"Let your world be a canvas..."</p>
                </div>
                <div className="image-frame">
                    <img src={profilePicture} alt="Gary"></img>
                </div>
            </main>
            <footer></footer>
        </div>
    )
}

export default About;