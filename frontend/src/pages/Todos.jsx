import TodoList from "../components/ToDo";
import { TodoCreationForm } from "../components/TodoCreationForm";

const Todos = ({ todos, onDelete, create, users, projects}) => {
  return (
    <>
      <TodoCreationForm create={create} usersList={users} projectsList={projects}/>
      <TodoList onDelete={onDelete} todos={todos} />
    </>
  );
};

export default Todos;
