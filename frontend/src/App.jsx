import React from 'react'
import MainRoutes from './router/MainRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
      <MainRoutes/>
      <Footer/>
    </>
  )
}

export default App