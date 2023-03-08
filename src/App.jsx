import React from 'react'
import './App.css';
import Signup from './Components/Signup'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login'
import Home from './Components/Home'
import './global.css'

function App() {
  return (
    <>
  <ToastContainer/>
  <Router>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  </Router>
    </>
  );
}

export default App;
