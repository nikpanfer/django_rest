import axios from "axios";
import { useEffect, useState } from "react";
import ProjectList from "../components/Project";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/projects/').then(resp => {
        setProjects(resp.data.results);
      }).catch(err => console.log(err));
  })
    return ( <ProjectList projects={projects} /> );
}
 
export default Projects;