import React from 'react';

import './project-card.styles.scss';

const ProjectCard = ({data}) => {
    const {title,projectUrl, imageUrl, description} = data;
    return (
    <a href={projectUrl} rel="noreferrer" target="_blank" className="card" style={{
        background:`url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
        }}
        >
        <div className="card-info">
            <h1 className="card-title">{title}</h1>
            <p className="card-description">{description}</p> 
        </div>
    </a>
    );
}

export default ProjectCard;