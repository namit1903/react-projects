import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <div className="container">
x
<Sidebar/>
<div className="content">
<Header/>
<Footer/></div></div>
    </>
  )
}

export default App