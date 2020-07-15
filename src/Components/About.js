import React, { Component } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'
import Background from './img/portfolio/PATTERN-AMARELO.png'

class About extends Component{
  render() {

    const Div = styled.div`
      color: #FFFF;
      text-align: center;
      padding-top: 2%;
      padding-bottom: 2%;
      background-image:
      url(${Background});
      display: inline-block;
    `

     return (
      <section className="About">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <Div style={props}>
              <h2>We've got what you need!</h2>
              <h3>A brief introduction</h3>
                  <p>R&R Decorators was born 4 years ago after the founder of the company worked as a self contractor decorator for a couple of years. Iniatially, the company was a service provider for big players in the B2B market, working in several new residential and commercial buildings managed by these companies in and around London. Since January 2019, we have decided to shift our focus to the B2C market and we have since worked in partnership with several architecture and design studios, as well as construction companies focused on the private market, such as renovations and conversions.</p>
              <h3>What do we offer?</h3>
                  <p>Expertise, reliability, hard work and the highest standards of quality are our main differentiators. We work around the clock to ensure your deadlines are met and that you and your customers have nothing but compliments once the job is finish. At the end of the day, our main source of new businesses acquisition up to now has been the word of mouth.</p>
            </Div>
            )}
        </Spring>
      </section>
      )
  }
}

export default About

