import react  from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import './App.css'
import Home from './Home'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
