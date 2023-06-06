import React, {useEffect, useState} from 'react'
import './App.css';

import './css/main.css'
import {createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider} from 'react-router-dom';
import Projects from './pages/Projects';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Layout from './pages/Layout';
import {Login} from "./pages/login";
import axios from "axios";
import Cookies from 'universal-cookie';

const App = () => {

    const [token, setToken] = useState('')
    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([])
    const [projects, setProjects] = useState([])


    const set_token = (token) => {
        const cookies = new Cookies()
        cookies.set('token', token)
        setToken(token)
    }
    const is_authenticated = () => {
        return token !== ''
    }
    const logout = () => {
        set_token('')
    }
    const get_token_from_storage = () => {
        const cookies = new Cookies()
        const token = cookies.get('token')
        setToken(token)
    }

    const get_headers = () => {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (is_authenticated()) {
            headers['Authorization'] = 'Token ' + token
        }
        return headers
    }

    const getToken = (username, password) => {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                set_token(response.data['token'])
            }).catch(error => {
            alert('Неверный логин или пароль')
            console.log(error)
        })
    }

    const loadUsers = () => {
        const headers = get_headers()

        axios.get('http://127.0.0.1:8000/api/1/users/', {headers}).then(resp => {
            setUsers(resp.data.results);
        }).catch(err => console.log(err));
    }

    const loadTodos = () => {
        const headers = get_headers()
        axios.get('http://127.0.0.1:8000/api/1/todos/', {headers}).then(resp => {
            setTodos(resp.data.results);
        }).catch(err => console.log(err));
    }

    const loadProjects = () => {
        const headers = get_headers()
        axios.get('http://127.0.0.1:8000/api/1/projects/', {headers}).then(resp => {
            setProjects(resp.data.results);
        }).catch(err => console.log(err));
    }

    const createTodo = (text, isActive, project, user) => {
        const headers = get_headers()
        const data = {text, isActive, project, user}
        axios.post('http://127.0.0.1:8000/api/1/todos/', data, {headers})
            .then(resp => {setTodos([resp.data, ...todos])})
            .catch(err => console.log(err));
    }

    const createProject = (name, repo, users) => {
        const headers = get_headers()
        const data = {name, repo, users}
        axios.post('http://127.0.0.1:8000/api/1/projects/', data, {headers})
            .then(resp => {setProjects([resp.data, ...projects])})
            .catch(err => console.log(err));
    }

    const deleteTodo = (id) => {
        const headers = get_headers()
        axios.delete(`http://127.0.0.1:8000/api/1/todos/${id}`, {headers})
            .then(() => setTodos(todos.filter(item => item.id !== id)))
            .catch(err => console.error(err))
    }

    const deleteProject = (id) => {
        const headers = get_headers()
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/api/1/projects/${id}`, {headers})
            .then(() => setProjects(projects.filter(item => item.id !== id)))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        get_token_from_storage()
    }, [])

    useEffect(() => {
        loadUsers()
        loadProjects()
        loadTodos()
    }, [token])

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout
            login={is_authenticated() ? <button onClick={logout}>Logout</button> : <Link to="login">Login</Link>}/>}>
            <Route index element={<Projects remove={id => deleteProject(id)} create={createProject} projects={projects} usersList={users}/>}/>
            <Route path='todos' element={<Todos onDelete={deleteTodo} todos={todos} projects={projects} users={users} create={createTodo}/>}/>
            <Route path='users' element={<Users users={users}/>}/>
            <Route path='login' element={<Login getToken={getToken}/>}/>
        </Route>
    ))


    return (<RouterProvider router={router}/>)

}

export default App;
