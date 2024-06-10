import React from "react";

function Project(props) {
    const { name, desc, link } = props;
    return (
        <div className="project">
            <h2>{name}</h2>
            <p>{desc}</p>
            <a href={link}>Project Link</a>
        </div>
    );
}

export default Project;
