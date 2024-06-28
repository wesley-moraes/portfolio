/* eslint-disable react/jsx-no-undef */
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <div className='main-box'>   
          <Router>
            <div className='nav-header'>
              <Link to="/">
                Home
              </Link>
              <Link to="/projects">
                Projetos
              </Link>
              <Link to="/contact">
                Contato
              </Link>
              <Link to="/about">
                Sobre
              </Link>
              
            </div>
            <div className='content'>
              <Routes>
                
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                
              </Routes>
            </div>
          </Router>
      </div>
    </div>
   </div>
  );
}

export default App;
