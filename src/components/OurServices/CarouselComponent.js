import React from 'react';
import styles from './CarouselComponent.module.css';
import Navbar from "../Navbar";
import CircularCarousel from "./CircularCarousel";
import Product1 from '../../assets/photobackgroung.png';
const CarouselComponent = () => {
    return (
        <div className={styles.container}>
            <Navbar/>
<<<<<<< HEAD
            
            {/* Background with gradient overlay */}
            <div className={styles.backgroundWrapper}>
                <div 
                    className={styles.background} 
                    style={{ backgroundImage: `url(${Product1})` }}
                />
                <div className={styles.gradientOverlay}></div>
            </div>

=======
            <div 
            className={styles.background} 
            style={{ backgroundImage: `url(${Product1})` }}  // Fixed the use of template literals here
                ></div>
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
            {/* Main Content Section */}
            <div className="relative h-screen w-full flex items-center justify-center lg:justify-end bg-cover bg-center">
                {/* Animated gradient circle */}
                <div className={styles.decorativeCircle}></div>
                
                {/* Main Content */}
<<<<<<< HEAD
                <div className="relative text-center lg:text-right z-10 px-6 lg:pr-20 lg:mr-10">
                    <div className={styles.brandContainer}>
                        <h1 className={styles.brandTitle}>
                            NEXUS
                        </h1>
                        <h2 className={styles.brandSubtitle}>
                            STUDIO
                        </h2>
                        <div className={styles.brandAccent}></div>
                        <p className={styles.brandTagline}>
                            Crafting Digital Excellence
                        </p>
                    </div>
=======
                <div className="relative lg:text-right z-10 lg:pr-0 lg:mb-45 mr-20 lg:mr-0 lg:mb-60 mb-80">
                    <h1 className="lg:text-[70px] sm:text-4xl text-5xl font-semibold text-black lg:mb-4 " style={{ fontFamily: "'Inria Serif', serif" }}>OUR</h1>
                    <h2 className="lg:text-5xl sm:text-3xl text-4xl font-semibold text-black lg:mr-14 mr-0" style={{ fontFamily: "'Inria Serif', serif" }}>SERVICES</h2>
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
                </div>
            </div>

            {/* Circular Carousel Component */}
            <CircularCarousel />
        </div>
    );
};

export default CarouselComponent;