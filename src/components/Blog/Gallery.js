import React from 'react';
import './Gallery.css';
import Navbar from '../Navbar';
// Importing images from assets folder
import image0 from '../../assets/blogpage0.jpg';
import image1 from '../../assets/blogpage1.jpg';
import image2 from '../../assets/blogpage2.jpg';
import image3 from '../../assets/blogpage3.jpg';
import image4 from '../../assets/blogpage4.jpg';
import image5 from '../../assets/blogpage5.jpg';
import image6 from '../../assets/blogpage6.jpg';
import Footer from '../Footer/Footer';
// import image1 from '../assets/image1.jpg';
// import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
// import image4 from '../assets/image4.jpg';
// import image5 from '../assets/image5.jpg';
// import image6 from '../assets/image6.jpg';

const Gallery = () => {
  const images = [
    { id: 1, src: image1 , alt: 'Image 1' },
    { id: 2, src: image2 , alt: 'Image 2' },
    { id: 3, src: image3 , alt: 'Image 3' },
    { id: 4, src: image4 , alt: 'Image 4' },
    { id: 5, src: image5 , alt: 'Image 5' },
    { id: 6, src: image6 , alt: 'Image 6' },
  ];

  return (
    <>
    <Navbar/>
    
      {/* Large Image Section */}
      <div className="large-image">
        <img src={image0} alt="Large Image" />
      </div>

      {/* Grid Layout for Small Images */}
      <h1>NEW ARTICLES</h1>
      
      
      
      <div className='grid-container'>
      <div className="image-grid">
        <div className='img1'>
      <img src={image1} alt="image1" />
      </div>
      <div className="img2">
      <img src={image2} alt="image2" />
      </div>
      <div className="img3">
      <img src={image3} alt="image3" />
      </div>
      <div className="img4">
      <img src={image4} alt="image4" />
      </div>
      <div className="img5">
      <img src={image5} alt="image5" />
      </div>
      <div className="img6">
      <img src={image6} alt="image6" />
      </div>
      </div>
        
        
        
        
        
        
        
        
        
        {/* {images.map(image => (
          <div key={image.id} className="grid-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div> */}
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;
