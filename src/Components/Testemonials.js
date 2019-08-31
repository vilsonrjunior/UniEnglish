import React from "react";
import Slider from "react-slick";
import { Card } from "antd";
import "antd/dist/antd.css";

class Testemonials extends React.Component {
  render() {

    let settings = {
      dots: true,
      infinite: false,
      autoplay: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
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
      backgroundColor: '#fff',
      textAlign: 'center',
      paddingTop: '4%',
      paddingBottom: '6%',
      paddingRight: '2%',
      paddingLeft: '8%'
    }

    const { Meta } = Card;

    return (
      <div style={divStyle}>
        <h5 style={h5Style}>TESTEMONIALS</h5>
        <h2 style={h2Style}>What do former students have to say about UniEnglish?</h2>
        <Slider {...settings}>
        <div>
           <Card
             hoverable
             style={{ width: 270, height: 350 }}
             cover={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
             >
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </div>
        <div>
           <Card
             hoverable
             style={{ width: 270, height: 350 }}
             cover={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
             >
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </div>
        <div>
           <Card
             hoverable
             style={{ width: 270, height: 350 }}
             cover={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
             >
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </div>
        <div>
           <Card
             hoverable
             style={{ width: 270, height: 350 }}
             cover={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
             >
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </div>
        <div>
           <Card
             hoverable
             style={{ width: 270, height: 350 }}
             cover={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
             >
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </div>
        <div>
           <Card
             hoverable
             style={{ width: 270, height: 350 }}
             cover={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
             >
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </div>
        <div>
           <Card
             hoverable
             style={{ width: 270, height: 350 }}
             cover={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
             >
            <Meta title="Europe Street beat" description="www.instagram.com" />
           </Card>
        </div>
      </Slider>
      </div>
    );
  }
}

export default Testemonials
