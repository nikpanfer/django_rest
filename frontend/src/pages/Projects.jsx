import {useEffect, useState} from "react";
import ProjectList from "../components/Project";
import { ProjectCreationForm } from "../components/ProjectCreationForm";

const Projects = ({ projects, remove, create, usersList }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() =>setFilteredProjects(projects), [projects])

  return (
    <div>
      <label htmlFor="filter">Поиск</label>
      <input
        name="filter"
        type="text"
        onChange={(event) =>
          setFilteredProjects(
            projects.filter((prj) => prj.name.includes(event.target.value))
          )

        }
      />
      <ProjectCreationForm create={create} usersList={usersList} />
      <ProjectList remove={remove} projects={filteredProjects} />
    </div>
  );
};

export default Projects;
