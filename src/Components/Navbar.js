import React from 'react'
// import './Navbar.css'
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

    const sections = ['About', 'Services', 'Testemonials', 'Contact' ]

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


