import React, {useState} from "react";
import Navbar from "../Navbar";
import Introduction from "../Introduction";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import ProjectView from "../ProjectView";

function App() {
  const [projectToView, setProjectToView] = useState({});

  // Update the project to be viewed in the modal
  const updateProjectToView = (project) => {
    setProjectToView(project);
  };

  // Close the modal that display details about the project
  const closeProjectView = () => {
    setProjectToView({});
  };
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects handleOnClick={updateProjectToView}/>
      <ProjectView project={projectToView} closeProjectView={closeProjectView}/>
    </>
  );
}

export default App;
