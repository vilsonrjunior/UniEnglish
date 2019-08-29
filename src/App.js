import React from 'react';
import './App.css';
import NavbarLight from './Components/Navbar'
import Header from './Components/Header'
import Services from './Components/Services'
import About from './Components/About'

function App() {
  return (
    <div>
      <NavbarLight />
      <Header button="Find Out More" />
      <About />
      <Services />
    </div>
  );
}

export default App;
