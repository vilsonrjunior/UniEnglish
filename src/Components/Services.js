import React, { Component } from 'react'
// import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGraduationCap, faUniversity, faUserGraduate, faChalkboardTeacher, faBook } from '@fortawesome/free-solid-svg-icons'

const serStyle={
  backgroundColor: '#1d809f',
  paddingTop: '4%',
  paddingBottom: '6%',
  textAlign: 'center',
}

const h3Style={
  color: 'rgb(236, 184, 7)',
  fontSize: '1rem',
  margin: '0',
  padding: '0',
}

const h2Style={
  fontSize: '2.5rem',
  color: '#fff',
  marginBottom: '2.8rem',
  padding: '0',
  marginTop: '0'
}

const rows={
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-around'
}

const spanStyle={
  backgroundColor: '#fff',
  color: '#1d809f',
  width: '8rem',
  height: '8rem',
  display: 'inline-block',
  borderRadius: '50%',
  fontSize: '4rem',
  lineHeight: '8rem'
}



class Services extends Component {
  render() {
      return(
        <div>
            <div style={serStyle}>
            <h3 style={h3Style}>SERVICES</h3>
            <h2 style={h2Style}>What we offer</h2>

            <div style={rows}>
              <div>
                <span style={spanStyle}><FontAwesomeIcon icon={faBook} /></span>
                <h4>IELTS Preparation</h4>
                <p>We can assist you getting the score you need <br/> in order to get your uni offer</p>
              </div>
              <div>
                <span style={spanStyle}><FontAwesomeIcon icon={faUniversity} /></span>
                <h4>Pre-arrival Preparation</h4>
                <p>Get ready for your uni life in the UK</p>
              </div>
              <div>
                <span style={spanStyle}><FontAwesomeIcon icon={faChalkboardTeacher} /></span>
                <h4>Very experienced teachers</h4>
                <p>All our teachers have years of experienced and <br/> have taught at presessional courses at London <br/>most prestigious unis</p>
              </div>
              <div>
                <span style={spanStyle}><FontAwesomeIcon icon={faGraduationCap} /></span>
                <h4>Sucess!</h4>
                <p>Some text text text text text text text text <br/> text texttext text texttext text text </p>
              </div>

            </div>
          </div>
        </div>
      )
   }
}

export default Services
