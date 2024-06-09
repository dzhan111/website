import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navigation from './Components/Navigation.js';
import AboutPage from './pages/AboutPage.js';
import HomePage from './pages/HomePage.js';
import ProjectPage from './pages/ProjectPage.js';

function App() {
  return (
      <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
  );
}

export default App;
