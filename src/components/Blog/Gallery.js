import React from 'react';
import Navbar from '../Navbar';
import image0 from '../../assets/blogpage0.jpg';
import image1 from '../../assets/blogpage1.jpg';
import image2 from '../../assets/blogpage2.jpg';
import image3 from '../../assets/blogpage3.jpg';
import image4 from '../../assets/blogpage4.jpg';
import image5 from '../../assets/blogpage5.jpg';
import image6 from '../../assets/blogpage6.jpg';
import Footer from '../Footer/Footer';

const Gallery = () => {
  const articles = [
    { id: 1, src: image1, alt: 'Article 1', title: 'Digital Transformation Strategies' },
    { id: 2, src: image2, alt: 'Article 2', title: 'Brand Evolution in 2024' },
    { id: 3, src: image3, alt: 'Article 3', title: 'Social Media Mastery' },
    { id: 4, src: image4, alt: 'Article 4', title: 'Web Design Trends' },
    { id: 5, src: image5, alt: 'Article 5', title: 'Content Marketing Insights' },
    { id: 6, src: image6, alt: 'Article 6', title: 'Performance Marketing Guide' },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
        <img 
          src={image0} 
          alt="Featured Article" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Latest Insights & Stories
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
            <p className="text-xl text-gray-300">
              Explore our collection of industry insights and success stories
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Featured Articles
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ height: index % 2 === 0 ? '550px' : '480px' }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                
                {/* Decorative blur */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Image */}
                <img
                  src={article.src}
                  alt={article.alt}
                  className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <span className="relative z-10">View All Articles</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;