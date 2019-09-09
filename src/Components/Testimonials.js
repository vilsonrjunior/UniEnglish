import React from "react";
import Slider from "react-slick"


function Arrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "grey", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

class Testimonials extends React.Component {
  constructor() {
  super()
    this.state = {
    testimonials: [
      {
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        unicourse: "IELTS Preparation",
        student:
          "John Smith, 25, from China"
      },
      {
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        unicourse: "Pre-arrival Preparation",
        student:
          "Test Test, 23, from Saudi Arabia"
      },
      {
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        unicourse: "Presessional teacher",
        student:
          "Paul Thompson, 30 from Chile"
      },
      {
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        unicourse: "UCL Masters",
        student:
          "Mary Jane"
      },
      {
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        unicourse: "University of Liverpool London",
        student:
          "Joseph Xi, 22 from China"
      },
      {
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        unicourse: "University College of London (UCL)",
        student:
          "Apple Cao, 35 from Thailand"
      },
      {
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        unicourse: "University College of London (UCL)",
        student:
          "Summer Zhang, 20 from China"
      }
    ]
  }}

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <Arrows />,
      prevArrow: <Arrows />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const h5Style={
      color: '#1d809f',
      fontSize: '1rem',
      margin: '0',
      padding: '0'
    }

    const h2Style={
      color: 'rgb(236, 184, 7)',
      fontSize: '2.5rem',
      margin: '0',
      padding: '0',
      marginBottom: '2.8rem',
      marginTop: '0'
    }

    const divStyle={
      // backgroundColor: '#fff',
      textAlign: 'center',
      paddingTop: '2%',
      paddingBottom: '4%',
      paddingRight: '7%',
      paddingLeft: '7%',
      backgroundColor: '#F0F0F0'
    }

    const cardStyle={
      backgroundColor: '#F8F8F8',
      borderRadius: '2%',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
      color: '#1d809f',
      height: '400px',
      margin: '10px',
      padding: '2%',
      position: 'relative',
      textAlign: 'center'
    }


    const review = this.state.testimonials.map(testimonial => {
      return(
          <div>
            <div style={cardStyle}>
              <p>{testimonial.review}</p>
              <h4>{testimonial.unicourse}</h4>
              <h5><b><i>{testimonial.student}</i></b></h5>
            </div>
          </div>
        )
      }
    )

    return (
      <div style={divStyle}>
        <h5 style={h5Style}>TESTIMONIALS</h5>
        <h2 style={h2Style}>What do former students have to say?</h2>
        <Slider {...settings}>
           {review}
        </Slider>
      </div>
    )
  }
}


export default Testimonials
