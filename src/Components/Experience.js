import React from "react";

function Experience(props) {

    const { title,date, description } = props;

    return (
        <div className="experience">
            <h2>{title}</h2>  {/* Displaying the title */}
            <h3>{date}</h3>
            <p>{description}</p>  {/* Displaying the description */}
        </div>
    );
}

export default Experience;