import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Details from '../pages/Details';
import About from '../pages/About';
import Products from '../pages/Products';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/" element={<Details/>} />
        <Route path="/about/" element={<About/>} />
        <Route path="/products/" element={<Products/>} />
        <Route path="/signup/" element={<SignUp/>} />
        <Route path="/login/" element={<Login/>} />
    </Routes>
  )
}

export default MainRoutes