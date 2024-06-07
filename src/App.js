import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import './App.scss';
import HomePage from './HomePage';
import Navigation from './Navigation';
import ProjectPage from './ProjectPage';

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
