import React from 'react'
import {Carousel,Card,Button} from 'react-bootstrap';
import img1c from "../../assets/img1c-removebg-preview.png"
import img2c from "../../assets/img2c-removebg-preview.png"
import img3c from "../../assets/img3c-removebg-preview.png"
import img4c from "../../assets/img4c-removebg-preview.png"
import img5c from "../../assets/img5c-removebg-preview.png"
import './OurServices.css'

function OurServices() {
  return (
    <>
    <div className='body'>
    <div className='heading'> OUR SERVICES</div>
    
    <div className='mainBody'>
        <Carousel className="service-card" 
        // style={{backgroundImage: 'linear-gradient(to bottom right, #f8f9fa, #A78770)'}} 
      >
        <Carousel.Item>
    <Card style={{ width: '620px', height: '300px', border: 'none',backgroundImage: 'linear-gradient(to bottom right,#fff, #7a7979)', backgroundColor: '#7a7979' }}>
      <div className="d-flex">
        {/* Left half for image */}
        <div style={{ flex: '0 0 50%' }}>
          <Card.Img src={img4c} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Right half for title and text */}
        <div style={{ flex: '0 0 50%', padding: '1rem' }}>
          <Card.Body>
            <Card.Title>PERFORMANCE MARKETING</Card.Title>
            <Card.Text>
            Lorem Ipsum isorem Ipsum is ss, when an unknown printer tong essentially unchanged. It was Ipsum.
            </Card.Text>
            <Button variant="light" style={{ fontSize: 'small',fontWeight: '500',borderRadius:'30px',position: 'absolute', 
              bottom: '1rem',right: '1rem'}}>Book Your Slot</Button>{' '}
          </Card.Body>
        </div>
      </div>
    </Card>
  </Carousel.Item>

  <Carousel.Item>
    <Card style={{ width: '620px', height: '300px', border: 'none',backgroundImage: 'linear-gradient(to bottom right,#fff, #7a7979)', backgroundColor: '#7a7979' }}>
      <div className="d-flex">
        {/* Left half for image */}
        <div style={{ flex: '0 0 50%' }}>
          <Card.Img src={img1c} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Right half for title and text */}
        <div style={{ flex: '0 0 50%', padding: '1rem' }}>
          <Card.Body>
            <Card.Title>WEB DESIGN AND DEVELOPMENT</Card.Title>
            <Card.Text>
            Lorem Ipsum is simorem Ipsum is ss, when an unknown printer tong essentially unchanged. It was Ipsum.
            </Card.Text>
            <Button variant="light" style={{ fontSize: 'small',fontWeight: '500',borderRadius:'30px',position: 'absolute', 
              bottom: '1rem',right: '1rem'}} className="custom-button">Book Your Slot</Button>{' '}
          </Card.Body>
        </div>
      </div>
    </Card>
  </Carousel.Item>


  <Carousel.Item>
    <Card style={{ width: '620px', height: '300px', border: 'none',backgroundImage: 'linear-gradient(to bottom right, #fff, #7a7979)', backgroundColor: '#7a7979' }}>
      <div className="d-flex">
        {/* Left half for image */}
        <div style={{ flex: '0 0 50%' }}>
          <Card.Img src={img5c} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Right half for title and text */}
        <div style={{ flex: '0 0 50%', padding: '1rem' }}>
          <Card.Body>
            <Card.Title>BRANDING</Card.Title>
            <Card.Text>
            Lorem Ipsum is ss, when an unknown printer tong essentially unchanged. It was Ipsum.
            </Card.Text>
            <Button variant="light" style={{ fontSize: 'small',fontWeight: '500',borderRadius:'30px',position: 'absolute', 
              bottom: '1rem',right: '1rem'}} className="custom-button">Book Your Slot</Button>{' '}
          </Card.Body>
        </div>
      </div>
    </Card>
  </Carousel.Item>


  <Carousel.Item>
    <Card style={{ width: '620px', height: '300px', border: 'none',backgroundImage: 'linear-gradient(to bottom right, #fff, #7a7979)', backgroundColor: '#7a7979'}}>
      <div className="d-flex">
        {/* Left half for image */}
        <div style={{ flex: '0 0 50%' }}>
          <Card.Img src={img3c} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Right half for title and text */}
        <div style={{ flex: '0 0 50%', padding: '1rem' }}>
          <Card.Body>
            <Card.Title>SOCIAL MEDIA MANAGEMENT</Card.Title>
            <Card.Text>
            Lorem Ipsum is simply dummy text of the printing publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card.Text>
            <Button variant="light" style={{ fontSize: 'small',fontWeight: '500',borderRadius:'30px',position: 'absolute', 
              bottom: '1rem',right: '1rem'}} className="custom-button">Book Your Slot</Button>{' '}
          </Card.Body>
        </div>
      </div>
    </Card>
  </Carousel.Item>



  <Carousel.Item>
    <Card style={{ width: '620px', height: '300px', border: 'none',backgroundImage: 'linear-gradient(to bottom right, #fff, #7a7979)', backgroundColor: '#7a7979' }}>
      <div className="d-flex">
        {/* Left half for image */}
        <div style={{ flex: '0 0 50%' }}>
          <Card.Img src={img2c} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Right half for title and text */}
        <div style={{ flex: '0 0 50%', padding: '1rem' }}>
          <Card.Body>
            <Card.Title>CONTENT CREATION</Card.Title>
            <Card.Text>
            Lorem Ipsum is simettpassages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card.Text>
            <Button variant="light" style={{ fontSize: 'small',fontWeight: '500',borderRadius:'30px',position: 'absolute', 
              bottom: '1rem',right: '1rem'}} className="custom-button">Book Your Slot</Button>{' '}
          </Card.Body>
        </div>
      </div>
    </Card>
  </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </>
  )
}

export default OurServices