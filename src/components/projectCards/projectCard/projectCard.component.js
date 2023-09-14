import React from "react";

import "./projectCardStylesFolder/projectCard.styles.small.css";

function ProjectCard( {card} ) {
    const {title, description, link, tags, date_created} = card;
    return (
        <div className="project-card">
            <h2 className="project-card-title">{title}</h2>
            <img className="project-card-image" src="https://placehold.co/600x400/png"/>
            <p className="project-card-description">{description}</p>
            <a className="project-card-link" target="_blank" href={link}>Project Link</a>
            <p className="project-card-date">{date_created}</p>
            {/* <p className="project-card-tags">tags: {tags.join(", ")}</p> */}
        </div>
    );
}

export default ProjectCard;