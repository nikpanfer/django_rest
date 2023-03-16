const Project = ({ project }) => {
    return (
      <div className="user">
        <h3>{project.name}</h3>
      </div>
    );
  };
  
  const ProjectList = ({projects}) => {
    return (
      <div>
        {projects.map((project) => (
          <Project project={project} key={project.id}/>
        ))}
      </div>
    );
  };
  
  export default ProjectList;