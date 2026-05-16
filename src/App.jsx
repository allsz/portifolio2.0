import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash === '' ? '#home' : hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash === '#about') return <About />;
    if (currentHash === '#contact') return <Contact />;
    return <Home />;
  };

  return (
    <>
      <Navbar />
      <section id="center" className="pt-[120px] pb-20 px-5 w-full max-w-[1700px] mx-auto flex flex-col items-center min-h-[150vh]">
        {renderContent()}
      </section>
    </>
  )
}

export default App
