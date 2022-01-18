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
                        I was born in Colombia but have lived in Orlando almost my whole life. 
                        I worked in the Hospitality industry, which taught me how to work in a team under intense pressure. 
                        I also started a Janitorial business that was active and profitable for about 7 years. 
                        This helped me understand what it takes to be an effective leader, as well as learn to identify the bigger picture of a business and improve on it; 
                        However, I wanted to be involved in the health and tech industry, so I studied to become a neurosurgeon. I have a love for Art, so at the same time, 
                        I studied Studio Art in college. During my time at UCF, I had to learn how to properly manage my time in order to pass all my classes. 
                        I did not continue studying Neuroscience, because I felt I was not able to consistently solve challenging problems. 
                        This is where Software engineering comes into play.
                    </p>
                    <p className="bio">
                        The core of this field is about solving new problems on a daily basis. 
                        I was also not able to fully express my creativity in neuroscience, whereas in Software engineering, 
                        I have the creative freedom to build complex frontend UIs or solve any challenging problem. 
                        However, I am proud to have done so much, because it has improved my skills in leadership, customer service, and time management, 
                        and I can apply these skills to software engineering.
                        This is why I fell in love with Software engineering. 
                        I decided to be a self-taught full-stack developer, 
                        by following a roadmap from a popular BootCamp as a guide. 
                        During that time, I created an applicant tracking system for a nonprofit, as well as a data-logging application for a popular local restaurant. Currently, I am at Formation, which is a fellowship that focuses on personalized coaching from top-tier software engineers. This company helped close the skill gap I had to become a top-performing engineer. I was able to collaborate with engineers, as well as implement production-ready features for their web application called Recur.
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