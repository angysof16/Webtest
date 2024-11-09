// src/App.js
import React, { useRef } from 'react';

import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" end NavLink="active">Inicio</NavLink>
        <NavLink to="/profile" NavLink="active">Perfil</NavLink>
        <NavLink to="/experience" NavLink="active">Experiencia</NavLink>
        <NavLink to="/education" NavLink="active">Estudios</NavLink>
        <NavLink to="/projects" NavLink="active">Proyectos</NavLink>
        <NavLink to="/contact" NavLink="active">Contacto</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;