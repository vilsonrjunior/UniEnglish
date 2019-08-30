
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
          "We can assist you getting the score you need in order to get your uni offer"
      },
      {
        icon: <FontAwesomeIcon icon={faUniversity} />,
        title: "Pre-arrival Preparation",
        info:
          "Get ready for your uni life in the UK"
      },
      {
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
        title: "Very experienced teachers",
        info:
          "All our teachers have years of experienced and have taught at presessional courses at London most prestigious unis"
      },
      {
        icon: <FontAwesomeIcon icon={faGraduationCap} />,
        title: "Success!",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <div>
          <h5>SERVICES</h5>
          <h2>What we offer</h2>
        </div>
        <div className="services-center">
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
