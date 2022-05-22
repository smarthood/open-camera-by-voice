import './App.css';
import Typewriter from 'typewriter-effect'
import logo from './logo-light.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home=()=> {
  return (
    <div className='App-header'>
      <img className='logo-img' src={logo} alt="SMTEC" />
      <div className="btn_container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScdQ1aBYu9mHXWs6Ys6YpwHEmwa_nmZO-9JfWilB-NGP57VSQ/viewform" target='_blank'>
      <button className='neon-button'>Register</button></a>
      <Link to = "/non-technical"><button className='neon-button'>Events</button></Link>
        </div>
      <div className="title">
          <span className='color'><Typewriter
  options={{
    strings: ['TECHNITE 2K22','National Level Technical Symposium'],
    autoStart: true,
    loop: true,
  }}
/></span>
      </div>
      <div class="the-neon-wrapper">
	<div class="the-neon-sign">
		<h1 class="cr-neon codepen-mid">
			On <span class="cr-neon-sub">June 3<sub>rd</sub> </span>

		</h1>
	</div>
    </div>
</div>
  );
}

export default Home;
