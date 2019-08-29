import React from 'react';
import './App.css';
import NavbarDark from './Components/Navbar'
import Header from './Components/Header'
import Services from './Components/Services'
import About from './Components/About'

function App() {
  return (
    <div>
      <NavbarDark />
      <Header button="Find Out More" />
      <About />
      <Services />
    </div>
  );
}

export default App;
