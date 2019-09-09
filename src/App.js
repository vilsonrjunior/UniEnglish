import React from 'react';
import NavbarLight from './Components/Navbar'
import Header from './Components/Header'
import Services from './Components/Services'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <NavbarLight />
      <Header button="Find Out More" />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
