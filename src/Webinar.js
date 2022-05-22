import React from 'react'
import Navbar from './Navbar'
import './Webinar.css'

export default function Webinar() {
  return (
    <div>
        <Navbar />
        <div className="web-container">
        <center>
            <h2>Workshop</h2>
        </center>
        <div className="centertitle">
        <div class="neonText-lightBlue">
      Title:<br /> DecentralizingBlockchain Technology
  </div>
  <div class="neonText-Lightgreen">
      Resource Person: <br />Mr.Saravana Kumar<br />
      (Iconix sofware solutions)
  </div>
   <div class="neonText-LightPink">
      Staff co-ordinator: Prof.John<br />
      contact: <a href ="Tel:+91 9677507303">9677507303</a> 
  </div>
 
            </div>
        </div>
    </div>
  )
}
