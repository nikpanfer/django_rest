const Project = ({project, remove}) => {
    return (
        <div className="user">
            <h3>{project.name}</h3>
            <h2>{project.id}</h2>
            <button type='button' onClick={() => remove(project.id)}>Delete</button>
        </div>
    );
};

const ProjectList = ({projects, remove}) => {
    return (
        <div>
            {projects.map((project) => (
                    <Project project={project} remove={remove} key={project.id}/>
            ))}
        </div>
    );
};

export default ProjectList;