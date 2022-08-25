import React from "react";
import Project from "./Project";
import projects from "../data/projects";

function Projects(props) {
  return (
    <section id="projects">
      <div className="container">
        <div className="body">
          <div className="title">
            <h1>PROJECTS</h1>
          </div>
          <div id="projects-container">
            {
              projects.map((project) => {
                return <Project key={project.name} project={project} handleOnClick={props.handleOnClick}/>;
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
