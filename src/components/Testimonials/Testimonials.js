import React from "react";
import { Carousel, Card } from "react-bootstrap";
import space from "../../assets/space.jpeg";
import mac from "../../assets/mac.jpeg";
import rv from "../../assets/rv.jpeg";
import annu from "../../assets/annu.jpeg";
import rohan from "../../assets/rohan.jpeg";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: space,
      quote: "Working with this team has been transformational. Their strategic approach to lead generation and targeted campaigns have significantly boosted our online presence. The transparency and communication throughout the process made them invaluable partners in our growth journey.",
      name: "Sandeep Soni",
      title: "CEO, The Space Crafters"
    },
    {
      id: 2,
      image: mac,
      quote: "Our collaboration resulted in a complete digital transformation. Not only did we establish and optimize our primary goals, but the team also helped us navigate practical challenges and seize new opportunities. The increase in sales speaks for itself.",
      name: "Monika Sharma",
      title: "Mac Biosciences"
    },
    {
      id: 3,
      image: rv,
      quote: "Ready to elevate your online presence? This team's savvy lead generation tactics and innovative campaigns have skyrocketed our website traffic. Don't let your competitors steal the spotlight—reach out and watch your business thrive.",
      name: "RV Designs",
      title: "RV Designs"
    },
    {
      id: 4,
      image: annu,
      quote: "The social media setup and website creation exceeded my expectations. It helped me reach my objectives efficiently. I highly recommend their services to colleagues and businesses seeking digital excellence.",
      name: "Annu Yadav",
      title: "Data Analyst at Global Infrastructure Hub"
    },
    {
      id: 5,
      image: rohan,
      quote: "An exceptional partnership that transformed my company. The guidance and strategic direction were instrumental to our success. The team's professionalism and dedication to their craft is truly remarkable.",
      name: "Rohan Chaudhary",
      title: "Founder, YMEI"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Header Section */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8">
            <div className="mb-6">
              <svg className="w-20 h-20 text-purple-400 opacity-50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4">
              Client Stories
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>
            <p className="text-xl text-gray-300 max-w-md">
              Real experiences from partners who've transformed their digital presence with us
            </p>
          </div>

          {/* Carousel Section */}
          <div className="lg:col-span-3 w-full">
            <Carousel 
              interval={6000}
              indicators={true}
              controls={true}
              className="modern-testimonial-carousel"
            >
              {testimonials.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <Card className="bg-transparent border-0">
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl min-h-[500px] md:min-h-[600px] flex flex-col justify-between">
                      
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6">
                        <svg className="w-12 h-12 text-purple-400 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>

                      {/* Quote Text */}
                      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pt-12">
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 leading-relaxed text-center italic">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-white/20 shadow-lg"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-lg md:text-xl text-gray-400">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;