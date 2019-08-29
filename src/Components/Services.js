import React, { Component } from 'react'
import './Services.css'

const serStyle={
  backgroundColor: '#1d809f',
  paddingTop: '12%',
  paddingBottom: '12%',
  textAlign: 'center',

  ':h3': {
  color: 'red',
  fontSize: '50px'
  },
}

class Services extends Component {
  render() {
      return(
        <div style={serStyle}>
          <h3 style={serStyle.h3}>SERVICES</h3>
          <h2>What we offer</h2>
        </div>
      )
   }
}

export default Services
