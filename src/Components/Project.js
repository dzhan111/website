import React from "react";

function Project(props){
    return (
        <p className="project">
        <h3 className="project-title"> {props.name}</h3>
        <h4 className="project-desc"> {props.desc}</h4>
        <a className="project-link"> {props.link} </a>
        </p>

    )
}

export default Project;
