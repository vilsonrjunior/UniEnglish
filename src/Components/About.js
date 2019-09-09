import React, { Component } from 'react'
import Profile from '../Components/img/perfil.jpeg'
import styled from 'styled-components'

class About extends Component{
  render() {


    const Div = styled.div`
      text-align: center;
      padding-top: 2%;
      padding-bottom: 2%;
    `

    const Div2 = styled.div`
      padding-left: 4%;
      padding-right: 4%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    `

     const Div3 = styled.div`
      display: flex;
      text-align: center;
      margin: 0;
      padding-left: 4%;
      padding-right: 4%;

    `

    const Img = styled.img`
      border-radius: 50%;
      width: 225px;
      height: 225px;
      padding:1px;
      border: solid 3px #D0D0D0;
      display: inline;
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
          <H2>Hello all!</H2>
          <h3>UniEnglish is an online school providing one-to-one and group live lessons on academic English and exam preparation. Experienced teachers who work or have worked at well-known UK universities will prepare you to succeed in your undergraduate or postgraduate course.
          </h3>
        </Div>


        <Div2>
          <Img src={Profile} alt="profile" />
        </Div2>


        <Div3>
           <h3>I am Tatiane Depieri, the founder of UniEnglish. I have worked at University College London and University of Liverpool and have over 12 years’ experience working with international students. Having completed a Master’s degree in the UK myself, I know what it takes to be a successful student.</h3>
        </Div3>


        <Div3>
          <h3>I started UniEnglish after seeing how difficult it was for students to write and read academic texts at undergraduate and postgraduate level. Most students I have had did not feel ready for the UK academic environment even with very high scores in proficiency exams such as IELTS. Our mission at UniEnglish is to prepare speakers of English as a second language for their degrees here in the UK so that they succeed and make the most of their course at university.</h3>
        </Div3>

      </section>
      )
  }
}

export default About

