import React from 'react';
import './App.css';
import NavbarLight from './Components/Navbar'
import Header from './Components/Header'
import Services from './Components/Services'
import About from './Components/About'
import Testemonials from './Components/Testemonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <NavbarLight />
      <Header button="Find Out More" />
      <About />
      <Services />
      <Testemonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
