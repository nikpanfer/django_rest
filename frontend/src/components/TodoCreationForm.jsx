import { useState } from "react";
import Select from "react-select";

export const TodoCreationForm = ({ create, usersList, projectsList }) => {
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState("True");
  const [project, setProject] = useState("");
  const [user, setUser] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    create(text, isActive, project, user);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="form-group">
        <label htmlFor="text">text</label>
        <input
          type="text"
          className="form-control"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="active">IS active?</label>
        <input
          type="checkbox"
          checked={isActive}
          className="form-control"
          name="active"
          onChange={() => setIsActive(!isActive)}
        
        />
      </div>
      <div className="form-group">
        <label htmlFor="project">project</label>
        <Select
          name="project"
          className="form-control"
          options={projectsList.map(({ name, id }) => {
            return { value: id, label: name };
          })}
          onChange={(newValue) => {
            setProject(newValue.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="user">user</label>
        <Select
          name="user"
          className="form-control"
          options={usersList.map(({ username, id }) => {
            return { value: id, label: username };
          })}
          onChange={(newValue) => {
            setUser(newValue.value);
          }}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Save" />
    </form>
  );
};
