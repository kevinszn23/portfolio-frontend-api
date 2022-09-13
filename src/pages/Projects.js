import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = () => {
    fetch(props.URL + "projects")
    .then((res) => res.json())
    .then ((json) => {
        setProjects(json)
    })
    .catch(console.error)
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name}/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;