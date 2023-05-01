import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Contact } from './components/Contact/Contact'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'


export const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Contact /> 
        <Footer />
    </>
  )


}

export default App