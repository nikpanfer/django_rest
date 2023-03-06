import React from 'react'
import './App.css';

import './css/main.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Projects from './pages/Projects';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Layout from './pages/Layout';

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Projects/>}/>
      <Route path='todos' element={<Todos/>}/>
      <Route path='users' element={<Users/>}/>
    </Route>
  ))


    return (<RouterProvider router={router} />)
  
}

export default App;
