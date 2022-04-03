import './App.css';
import Main from './Components/Main'
import Camera from './Components/Camera'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
