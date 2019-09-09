
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUniversity, faChalkboardTeacher, faBook } from '@fortawesome/free-solid-svg-icons'
import './Services.css'

class Services extends Component {
  state = {
    services: [
      {
        icon: <FontAwesomeIcon icon={faBook} />,
        title: "IELTS Preparation",
        info:
          "A high score in the IELTS exam is the door to any university in the UK. UniEnglish can assist you in getting the score you need to start the degree of your dreams"
      },
      {
        icon: <FontAwesomeIcon icon={faUniversity} />,
        title: "Academic English lessons",
        info:
          "Achieved the score you needed in IELTS? Excellent! But this is not enough for achieving outstanding results in your undergraduate or postgraduate course. We can help you improve your Academic English so you can succeed in your degree"
      },
      {
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
        title: "Pre-arrival preparation",
        info:
          "Be ahead of the game! We can help you with information about living in the UK as a student"
      },
      {
        icon: <FontAwesomeIcon icon={faGraduationCap} />,
        title: "Skills focus",
        info:
          "If you need to improve a particular skill such as reading or writing, we can offer bespoke lessons that will focus specifically on the skills that you need to master"
      }
    ]
  };

  toggleAppear = () => {
    console.log('hello')
  }

   render() {
    return (
      <section className="services">
        <div>
          <h5>SERVICES</h5>
          <h2>What we offer</h2>
        </div>
        <div onscroll={this.toggleAppear} className="services-center">
          {this.state.services.map(item => {
            return (
              <div key={`item-${item.title}`} className="service">
                <div>
                  <span>{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services
