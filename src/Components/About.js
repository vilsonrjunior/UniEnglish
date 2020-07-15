import React, { Component } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'
import Background from './img/portfolio/PATTERN-AMARELO.png'

class About extends Component{
  render() {

    const Div = styled.div`
      color: #FFFF;
      text-align: center;
      margin: auto;
      height: 45rem;
      padding-top: 5%;
      padding-left: 20%;
      padding-right: 20%;
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
                  <h4>R&R Decorators was born 4 years ago after the founder of the company worked as a self contractor decorator for a couple of years. Iniatially, the company was a service provider for big players in the B2B market, working in several new residential and commercial buildings managed by these companies in and around London. Since January 2019, we have decided to shift our focus to the B2C market and we have since worked in partnership with several architecture and design studios, as well as construction companies focused on the private market, such as renovations and conversions.</h4>
              <h3>What do we offer?</h3>
                  <h4>Expertise, reliability, hard work and the highest standards of quality are our main differentiators. We work around the clock to ensure your deadlines are met and that you and your customers have nothing but compliments once the job is finish. At the end of the day, our main source of new businesses acquisition up to now has been the word of mouth.</h4>
              <h3>Why are we different?</h3>
                <h4>We are a young and ambitious team, eager to grow. Did you know that the majority of London's most renowed decorating companies do not employ a single decorator and can barely tell their brushes from their paint rollers? That also left us completely astounded and it was our 'eureka moment': why we, the people delivering the jobs, should be sharing the profits with companies whose sole purpose is to connect people like you to us? By cutting the middle men, we are able to offer more competitive rates to our customers and still make a fairer salary ourselves. No brainer, right? We will be pleased to send you as many references as you may need and we have all the necessary tools, permits and insurance to start any job, anywhere. The only thing we ask you for is a challenge. Let us prove to you that quality and affordable rates can walk hand in hand!</h4>
            </Div>
            )}
        </Spring>
      </section>
      )
  }
}

export default About

