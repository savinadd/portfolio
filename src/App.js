// App.js
import React from 'react';
import Home from './components/Home';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import './App.css';

function App() {
  return (
    <div>
      <ParticleBackground />
      <Navbar />
      <Home />
      
      <Timeline />
      
    </div>
  );
}

export default App;


