import React from 'react';
import GithubLogo from '../../assets/github.png'
import './project-card.styles.scss';
const ProjectCard = ({data}) => {
    const {title,projectUrl, imageUrl, description} = data;
    let body;

    if (projectUrl) {
        body = (
          <a 
            href={projectUrl} 
            rel="noreferrer" 
            target="_blank" 
            className="card" 
            style={{backgroundImage:`url(${imageUrl})`}}
          >
            <div className="card-info">
            <h1 className="card-title"><span className='github-logo'><img src={GithubLogo} alt="Gary"></img></span>{title}</h1>
            <p className="card-description">{description}</p>
        </div>
    </a>)
    } else {
        body = (
            <div 
            className="card" 
            style={{backgroundImage:`url(${imageUrl})`}}
          >
            <div className="card-info">
            <h1 className="card-title">{title}</h1>
            <p className="card-description">{description}</p> 
        </div>
    </div> 
        )
    }
    return body;
}

export default ProjectCard;