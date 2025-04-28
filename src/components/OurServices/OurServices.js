import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1c from "../../assets/img1c-removebg-preview.png";
import img2c from "../../assets/img2c-removebg-preview.png";
import img3c from "../../assets/img3c-removebg-preview.png";
import img4c from "../../assets/img4c-removebg-preview.png";
import img5c from "../../assets/img5c-removebg-preview.png";

function OurServices() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10">
      <div className="text-4xl lg:text-5xl md:text-4xl font-bond underline text-center mb-5">OUR SERVICES</div>

      {/* Carousel section with responsive container */}
      <div className="w-full max-w-7xl px-4">
        <Carousel>
          {/* First Slide: Performance Marketing */}
          <Carousel.Item>
            <div
              className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
              style={{ height: 'auto', minHeight: '400px' }}>

              {/* Image container with responsive sizing */}
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img1c} alt="Performance Marketing" className="w-30 h-30 lg:w-40 lg:h-40 md:w-70 md:h-70 object-cover rounded-full" />
              </div>

              {/* Text container with responsive paddings and alignment */}
              <div className="w-full md:w-2/3 md:pl-8 text-start md:text-left">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ">SMARTPHONE MARKETING</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
                Smartphone marketing has become one of the most powerful tools for businesses to connect directly with consumers. Through mobile apps, social media advertising, push notifications, SMS campaigns, and influencer partnerships, companies can reach users instantly and offer highly personalized experiences. Smartphones enable real-time interaction, location-based promotions, and seamless e-commerce integration, making it easier for brands to drive engagement and sales. 
                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition">
                    Book Your Slot
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          

          <Carousel.Item>
            <div
              className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
              style={{ height: 'auto', minHeight: '400px' }}>
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img2c} alt="Web Design and Development" className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full" />
              </div>
              <div className="w-full md:w-2/3 md:pl-8 text-start md:text-left">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">PROTEIN MARKETING</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
                marketing for protein stocks focuses on targeting health-conscious individuals, fitness enthusiasts, and athletes. Brands promote the nutritional benefits of their products through educational content, influencer collaborations, fitness app integrations, and social media campaigns. Highlighting product quality, transparency, and results helps build trust among consumers
                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition">
                    Book Your Slot
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
              style={{ height: 'auto', minHeight: '400px' }}>
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img3c} alt="Web Design and Development" className="w-60 h-60 md:w-60 md:h-60 object-cover rounded-full" />
              </div>
              <div className="w-full md:w-2/3 md:pl-8 text-start md:text-left">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">STOCK PRICES MARKETING</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
                In the stock market sector, marketing primarily focuses on building investor confidence and educating audiences about trading opportunities. Financial service companies, brokerage firms, and investment platforms use digital marketing strategies such as targeted ads, webinars, market analysis reports, newsletters, and influencer partnerships to reach potential investors.
                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition">
                    Book Your Slot
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
  <div
    className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
    style={{ height: 'auto', minHeight: '400px' }}
  >
    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
      <img
        src={img4c}
        alt="Web Design and Development"
        className="w-80 h-80 md:w-72 md:h-72 object-cover rounded-full"
      />
    </div>
    <div className="w-full md:w-2/3 md:pl-8 text-start md:text-left">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">CLOTHING MARKETING</h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
      In the clothing sector, marketing revolves around building a strong, relatable brand identity and staying ahead of fashion trends. Brands use visually appealing campaigns, fashion influencer partnerships, online ads, and curated social media content to attract and retain customers. Personalized shopping experiences, seasonal promotions, and collaborations with designers or celebrities help in creating excitement and loyalty around the brand. 
      </p>
      <Link to="/contact">
        <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition">
          Book Your Slot
        </button>
      </Link>
    </div>
  </div>
</Carousel.Item>


          
        </Carousel>
      </div>
    </div>
  );
}

export default OurServices;
