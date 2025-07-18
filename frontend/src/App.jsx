import React, { useEffect } from 'react'
import MainRoutes from './router/MainRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import {  asyncCurrentUser } from './store/actions/userAction'
import { asyncloadProducts } from './store/actions/productsAction'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncloadProducts());

  }, [dispatch]);
  return (
    <>
    <Header/>
      <MainRoutes/>
      <Footer/>
    </>
  )
}

export default App