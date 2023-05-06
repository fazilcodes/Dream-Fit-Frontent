import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Contact } from './components/Contact/Contact'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import  Workout  from './components/workout/Workout'
import Api from './components/Api/Api'


export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/api" element={<Api />} />
        <Route path="/" element={
          <>
            <Header />
            <Workout />
            <About />
            <Services />
            <Contact /> 
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  )


}

export default App