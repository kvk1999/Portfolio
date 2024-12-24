import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; // Import the new About component
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About /> {/* Include the About section */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;