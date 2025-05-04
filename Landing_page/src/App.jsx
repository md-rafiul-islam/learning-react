import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Introduction from './component/Introduction'
import Skills from './component/Skills'
import Projects from './component/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


function App() {

  return (
    <>
    <Header/>
    <Introduction/>
    <Skills></Skills>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}

export default App
