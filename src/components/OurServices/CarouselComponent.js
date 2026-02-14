import React from 'react';
import styles from './CarouselComponent.module.css';
import Navbar from "../Navbar";
import CircularCarousel from "./CircularCarousel";
import Product1 from '../../assets/photobackgroung.png';

const CarouselComponent = () => {
    return (
        <div className={styles.container}>
            <Navbar/>
            
            {/* Background with gradient overlay */}
            <div className={styles.backgroundWrapper}>
                <div 
                    className={styles.background} 
                    style={{ backgroundImage: `url(${Product1})` }}
                />
                <div className={styles.gradientOverlay}></div>
            </div>

            {/* Main Content Section */}
            <div className="relative h-screen w-full flex items-center justify-center lg:justify-end bg-cover bg-center">
                {/* Animated gradient circle */}
                <div className={styles.decorativeCircle}></div>
                
                {/* Main Content */}
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
                </div>
            </div>

            {/* Circular Carousel Component */}
            <CircularCarousel />
        </div>
    );
};

export default CarouselComponent;