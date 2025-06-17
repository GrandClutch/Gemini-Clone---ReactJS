import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Settings from './components/Settings/Settings'

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  )
}

export default App