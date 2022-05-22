import React from 'react'
import Navbar from './Navbar'
import './list.css'
import Footer from './Footer'

export default function Nontechnical() {
  return (
    <div>
        <Navbar />   
      <center>
        <h2 data-splitting>Non-Technical Events</h2>
      </center>
      <div className="list-container">
      <ol className="style_1">
          <li>Ad-Zap</li>
          <small>
        Staff Co-ordinator: Prof.Sharon<br />
        contact: <a href ="Tel:+917010788750">7010788750</a>
      </small>
          <li>Link Wizard</li>
          <small>
        Staff Co-ordinator: Prof.Shaheen<br />
        contact: <a href ="Tel:+919487668773">9487668773</a>
      </small>
          <li>Moj - on</li>
          <small>
        Staff Co-ordinator: Prof.Sharon<br />
        contact: <a href ="Tel:+917010788750">7010788750</a>
      </small>
        </ol>
        </div>
    </div>
  )
}
