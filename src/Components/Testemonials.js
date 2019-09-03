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

class Testemonials extends React.Component {
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
      paddingTop: '4%',
      paddingBottom: '4%',
      paddingRight: '7%',
      paddingLeft: '7%',
      backgroundColor: '#fff'
    }

    const cardStyle={
      backgroundColor: '#fff',
      borderRadius: '2%',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      color: '#1d809f',
      height: '400px',
      margin: '10px',
      padding: '2%',
      position: 'relative',
      textAlign: 'center'
    }

    const reviews = ['John Smith', 'Services', 'Testemonials', 'Contact' ]
    const review = reviews.map(review => {
        return(
          <div>
            <div style={cardStyle}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <h4>{review}</h4>
              <h5><b>UCL Student 2019</b></h5>
            </div>
          </div>
         )
      });

    return (
      <div style={divStyle}>

        <h5 style={h5Style}>TESTEMONIALS</h5>
        <h2 style={h2Style}>What do former students have to say about UniEnglish?</h2>
        <Slider {...settings}>
            {review}
        </Slider>
      </div>
    );
  }
}

export default Testemonials
