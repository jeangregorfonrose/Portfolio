import React from "react";

function Project(props) {

  const handleClick = (project) => {
    props.handleOnClick(project);
  };
  return (
    <div className="project" onClick={(event) => {handleClick(props.project);}}>
      <div className="name">
        <div className="overlay">
          <h2>{props.project.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Project;
