import React, { Component } from 'react'
import Logo from './img/portfolio/LOGO-RR---ESCURO.png'
import './Header.css'

class Header extends Component {
  render() {
      return(
        <header>
            <div className="img">
              <img src={Logo} alt="Logo"/>
            </div>
            <h2>We deliver quality painting</h2>
            <h2>No job is too big or too small</h2>
            <h4><i></i></h4>
            <a href="#button">{this.props.button}</a>

        </header>

      )
   }
}

export default Header
