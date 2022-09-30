import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects, info }) {
  console.log(projects[0].name);
  let pro = projects.map((item)=>{
    return( <div key={item.id}><h2 > {item.name}</h2>
    <p>{item.about}</p>
    </div>
    )
  })
  return (
    <div id="projects">
      
      <h2>My Projects</h2>
      {pro}
      <div id="project-list"> 
      
      <ProjectItem technologies={projects[0].technologies}  />
      <ProjectItem technologies={projects[1].technologies}/>
      <ProjectItem technologies={projects[2].technologies}/>
      
      </div>
    </div>
  );
}

export default ProjectList;
