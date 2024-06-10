import React from 'react';
import Project from '../Components/Project.js';


function ProjectPage() {
    const projects = [
        {
            name: "Weather App",
            desc: "A simple app that displays weather information using the OpenWeatherMap API.",
            link: "https://example.com/weather-app"
        },
        {
            name: "Todo List",
            desc: "A React-based todo list app that allows users to add, delete, and mark tasks as complete.",
            link: "https://example.com/todo-list"
        },
        {
            name: "Blog Platform",
            desc: "A platform for blogging built with Node.js and React, featuring user authentication.",
            link: "https://example.com/blog-platform"
        }
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <Project key={index} name={project.name} desc={project.desc} link={project.link} />
            ))}
        </div>
    );
}

export default ProjectPage;
