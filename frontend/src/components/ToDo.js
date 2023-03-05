const Todo = ({ todo }) => {
  return (
    <div className="user">
      <h3>{todo.text}</h3>
    </div>
  );
};

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo todo={todo} key={todo.id}/>
      ))}
    </div>
  );
};

export default TodoList;
