import React, {useEffect, useState} from 'react'
import './App.css';

import './css/main.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Projects from './pages/Projects';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Layout from './pages/Layout';
import {Login} from "./pages/login";
import axios from "axios";
import Cookies from 'universal-cookie';

const App = () => {

    const [token, setToken] = useState('')


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
        this.setState({'token': token})
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
                console.log(response.data)
            }).catch(error => alert('Неверный логин или пароль'))
    }

    useEffect(() => {
        get_token_from_storage()
    })

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<Projects headers={get_headers}/>}/>
            <Route path='todos' element={<Todos headers={get_headers}/>}/>
            <Route path='users' element={<Users headers={get_headers}/>}/>
            <Route path='login' element={<Login getToken={(login, passwd) => getToken(login, passwd)}/>}/>
        </Route>
    ))


    return (<RouterProvider router={router}/>)

}

export default App;
