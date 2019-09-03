import React, { Component } from 'react'
import Profile from '../Components/img/perfil.jpeg'
import styled from 'styled-components'

class About extends Component{
  render() {


    const Div = styled.div`
      background-color: #F0F0F0;
      text-align: center;
      padding-top: 2%;
      padding-bottom: 6%;
    `

    const Img = styled.img`
      border-radius: 50%;
      width: 225px;
      height: 225px;
      padding:1px;
      border: solid 3px #D0D0D0;
    `

    const H5 = styled.h5`
      color: #1d809f;
      font-size: 1rem;
      margin: 0;
      padding: 0;
      padding-bottom: 1%;
    `


    const H2 = styled.h2`
      color: rgb(236, 184, 7);
      font-size: 2.5rem;
      margin: 0;
      padding: 0;
      margin-bottom: 2.8rem;
      margin-top: 0;
    `

     return (
      <section className="About">
        <Div>
          <H5>ABOUT</H5>
          <span><Img src={Profile} alt="profile" /></span>
          <H2>Hello all!</H2>
        </Div>
      </section>
      )
  }
}

export default About

