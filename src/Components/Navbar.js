import React from 'react'
import './Navbar.css'
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
// import styled from 'styled-components'

class NavbarLight extends React.Component {
  constructor(props) {
    super()
    this.state = {
      hidden: true,
    }
  }

  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    })
  }



  render() {
    const { hidden } = this.state;

    const sections = ['Home', 'About', 'Services', 'Testemonials', 'Contact' ]
    const navLinks = sections.map(section => {
        return(
          <NavbarLink light href={'#' + section}>{section}</NavbarLink>
         )
      });

    return (
      <Container fluid>
        <Container fluid>
          <Navbar expandSm light sticky="top">
            <Nav end>

              <NavbarLink light brand href="#">UniEnglish</NavbarLink>

              <Button
                light
                outline
                toggleCollapse
                expandSm
                onClick={() => this.handleOpenCloseNav()}
              >
                <span>&#9776;</span>
              </Button>

              </Nav>

            <Nav
                end
                collapse
                expandSm
                hidden = { hidden }
              >
              {navLinks}
            </Nav>

          </Navbar>
        </Container>
      </Container>
    )
  }
}

export default NavbarLight




 // // import { Link } from "react-router-dom";
// // import { FaAlignRight } from "react-icons/fa";
// // import logo from "../images/logo.svg";
// import './Navbar.css'

// class NavbarLight extends Component {
//   state = {
//     isOpen: false
//   };
//   handleToggle = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };
//   render() {

//     const sections = ['About', 'Services', 'Testemonials', 'Contact' ]
//     const navLinks = sections.map(section => {
//         return(
//           <li href={'#' + section}>{section}</li>
//          )
//       });


//     return (
//       <nav className="navbar">

//         <div className="logo">
//           <h3 href="#">UniEnglish</h3>
//         </div>

//           <div className="nav-header">

//             <button
//               type="button"
//               className="nav-btn"
//               onClick={this.handleToggle}
//               >
//               <span>&#9776;</span>
//             </button>
//           </div>

//           <ul
//             className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
//             >
//             {navLinks}
//           </ul>

//       </nav>
//     );
//   }
// }

// export default NavbarLight
