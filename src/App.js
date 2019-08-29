import React from 'react';
import './App.css';
import NavbarLight from './Components/Navbar'
import Header from './Components/Header'
import Services from './Components/Services'
import About from './Components/About'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee, faGraduationCap)


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
