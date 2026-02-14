import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ConcentricCircle from "./ConcentricCircle";
import "./HeroSection.css";

const HeroSection = () => {
  const [animationPhase, setAnimationPhase] = useState("initial");
  
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setAnimationPhase("hero-opening");
    }, 1500);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (animationPhase === "hero-opening") {
      const textTimer = setTimeout(() => {
        setAnimationPhase("text-showing");
      }, 800);

      return () => clearTimeout(textTimer);
    }
  }, [animationPhase]);

  const handleTextClick = () => {
    setAnimationPhase("circle-showing");
  };

  const handleCircleClick = () => {
    setAnimationPhase("initial");
  };

  const isHeroVisible = animationPhase === "hero-opening" || animationPhase === "text-showing";
  const isTextVisible = animationPhase === "text-showing";
  const isCircleVisible = animationPhase === "circle-showing";

  return (
    <>
      <Navbar />
      
      {!isCircleVisible && (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className={`relative z-10 transition-all duration-1000 ${isHeroVisible ? 'opacity-0 -translate-y-20' : 'opacity-100'}`}>
            <div className="container mx-auto px-6 py-32 md:py-48">
              <div className="max-w-6xl mx-auto">
                {/* Main headline */}
                <div className="mb-8">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 leading-tight">
                    Elevate
                  </h1>
                </div>

                {/* Subtitle */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                  <div className="flex-1">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white/90 leading-tight">
                      Your Digital
                      <br />
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Presence
                      </span>
                    </h2>
                  </div>
                  
                  <div className="max-w-md">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Transforming visions into extraordinary digital experiences through innovation and creative excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Text Layer */}
          {isTextVisible && (
            <div
              className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-700"
              onClick={handleTextClick}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleTextClick()}
            >
              <div className="text-center space-y-4 px-6">
                <div className="overflow-hidden">
                  <span className="block text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-tight transform translate-y-0 animate-slide-up" style={{ fontFamily: "'Playfair Display', serif" }}>
                    We Create
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-4xl md:text-6xl lg:text-8xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight animate-slide-up" style={{ animationDelay: "0.1s", fontFamily: "'Playfair Display', serif" }}>
                    Experiences
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-3xl md:text-5xl lg:text-7xl font-light text-white/80 leading-tight animate-slide-up" style={{ animationDelay: "0.2s", fontFamily: "'Playfair Display', serif" }}>
                    That Inspire
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-3xl md:text-5xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight animate-slide-up" style={{ animationDelay: "0.3s", fontFamily: "'Playfair Display', serif" }}>
                    And Transform
                  </span>
                </div>
                
                <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Click to explore our world
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {isCircleVisible && <ConcentricCircle onClick={handleCircleClick} />}
    </>
  );
};

export default HeroSection;