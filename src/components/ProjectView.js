import React, { useState } from "react";
import githubImage from "../assets/github.png";

function ProjectView(props) {
  const projectEmpty = Object.keys(props.project).length === 0 ? true : false;

  return !projectEmpty ? (
    <div id="project-view">
      <div id="container">
        <div id="view-head">
          <i
            className="material-icons"
            style={{ fontSize: "36px", color: "white" }}
            onClick={props.closeProjectView}
          >
            close
          </i>
        </div>
        <div id="view-body">
          <h1>{props.project.name}</h1>
          <div
            id="project-img"
            style={{ backgroundImage: `url(${props.project.preview})` }}
          ></div>
          <div id="project-desc">
            <div id="tech-actions">
              <ul id="tech">
                {props.project.techs.map((tech) => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
              <ul id="actions">
                <li>
                  {props.project.githubLink == "" ? (
                    <div></div>
                  ) : (
                    <a href={props.project.githubLink} target="_blank">
                      <img src={githubImage} />
                    </a>
                  )}
                </li>
              </ul>
            </div>
            <div id="description">
              <ul>
                {props.project.desc.map((desc, index) => {
                  return <li key={index.toString()}>{desc}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default ProjectView;
