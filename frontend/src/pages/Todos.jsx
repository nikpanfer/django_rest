import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "../components/ToDo";

const Todos = (props) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const headers = props.headers()
        axios.get('http://127.0.0.1:8000/api/todos/', {headers}).then(resp => {
            setTodos(resp.data.results);
        }).catch(err => console.log(err));
    }, [])

    return ( <TodoList todos={todos}/> );
}
 
export default Todos;