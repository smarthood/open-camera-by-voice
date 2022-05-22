import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Technical from './Technical'
import Nontechnical from './Nontechnical'
import Webinar from './Webinar'


export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/non-technical" element={<Nontechnical />} />
          <Route path="/Webinar" element={<Webinar />} />
        </Routes>
    </Router>
  )
}
