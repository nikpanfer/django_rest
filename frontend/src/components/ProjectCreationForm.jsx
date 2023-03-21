import { useState } from "react";
import Select from "react-select";

export const ProjectCreationForm = ({ create, usersList }) => {
  const [name, setName] = useState("");
  const [repo, setRepo] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    create(name, repo, users);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="form-group">
        <label htmlFor="name">name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="repo">repo</label>
        <input
          type="slug"
          className="form-control"
          name="repo"
          value={repo}
          onChange={(event) => setRepo(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="users">users</label>
        <Select
          name="users"
          isMulti
          className="form-control"
          options={usersList.map(({ username, id }) => {
            return { value: id, label: username };
          })}
          onChange={(newValue) => {
            setUsers(newValue.map((item) => item.value));
          }}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Save" />
    </form>
  );
};
