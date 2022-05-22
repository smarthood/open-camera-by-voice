import React from 'react'
import Navbar from './Navbar'

export default function Technical() {
  return (
    <div>
        <Navbar />
        <center>
        <h2 data-splitting>Technical Events</h2>
      </center>
      <div className="list-container pink">
        <ol className="style_1">
          <li>Project Expo</li>
          <small>
				*Note:Participant must bring your project demo
			</small><br />
      <small>
        Staff Co-ordinator: Prof.Angel<br />
        contact: <a href ="Tel:+918072606598">8072606598</a>
      </small><br />
          <li>Tech Presento</li>
          <small>
            *Note:Participant must sent your Abstract to <a href="mailto:renolddickson18@gmail.com">[ technite.smtec@gmail.com ]</a><br />
        Staff Co-ordinator: Prof.Lavanya<br />
       contact: <a href ="Tel:+919003729985">9003729985</a>

      </small>
          <li>Bug Smash</li>
          <small>
        Staff Co-ordinator: Prof.Amala Princeton<br />
        contact: <a href ="Tel:+919884437573">9884437573</a>
      </small>
          <li>Technite Web</li>
          <small>
        Staff Co-ordinator: Prof.Asir<br />
        contact: <a href ="Tel:+918248280673">8248280673</a>
      </small>
        </ol>
        </div>
    </div>
  )
}
