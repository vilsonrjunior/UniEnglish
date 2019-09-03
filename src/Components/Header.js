import React, { Component } from 'react'
// import Background from './img/bkimg.jpg'
import './Header.css'

// const headerStyle={
//   backgroundImage: `url(${Background})`,
  // backgroundSize: 'cover',
  // minHeight: '30rem',
  // height: 'auto',
  // margin: '0 auto',
  // textAlign: 'center',
  // paddingTop: '8rem',
  // paddingLeft: '30%',
  // paddingBottom: '6rem',
  // backgroundPosition: 'center center',
  // backgroundRepeat: 'no-repeat',
//  }

//  const h1Style={
//   display: 'flex',
//   fontSize: '3.5rem',
//   margin: '0',
//   color: 'rgb(33, 37, 41)'
//  }

//  const h4Style={
//   fontSize: '1.75rem',
//   color: 'rgb(33, 37, 41)',
//   fontWeight: '700',
//   paddingBottom: '2%'
// }

// const aStyle={
//   paddingTop: '2%',
//   fontWeight: '700',
//   backgroundColor: '#1d809f',
//   color: '#fff',
//   padding: '1.25rem 2.5rem',
//   textDecoration: 'none',
//   borderRadius: '0.25rem',
//   fontSize: '1rem',
//   display: 'inlineBlock',
// }

class Header extends Component {
  render() {
      return(
        <header>

            <h1>Helping you achieve your dream <br/>of studying at a UK University!</h1>
            <h4><i>some text that will help me check the location</i></h4>
            <a href="#button">{this.props.button}</a>

        </header>

      )
   }
}

export default Header
