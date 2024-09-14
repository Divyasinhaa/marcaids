import React, { useEffect, useState } from 'react';
import styles from './CarouselComponent.module.css';
import Navbar from "../Navbar";
import CircularCarousel from "./CircularCarousel";
import Product1 from '../../assets/photobackgroung.png';
import branding2 from "../../assets/branding2.png";
import contentcreation from "../../assets/contentcreation.jpg";
import socialmediamanagement from "../../assets/socialmediamanagement.png";
import webanddevelopment from "../../assets/webanddevelopment.png";
import marketing2 from '../../assets/marketing2.jpg';


const CarouselComponent = () => {
    const sequence = [0, 4, 3, 2, 1];
    const [rotation, setRotation] = useState(0);
    const [topImageIndex, setTopImageIndex] = useState(0);

    const images = [   socialmediamanagement, branding2 ,marketing2,contentcreation,webanddevelopment ];
    const texts = ["PERFORMANCE MARKETING","WEB DESIGN-DEVELOPMENT","BRANDING","SOCIAL MEDIA-MANAGEMENT","CONTENT-CREATION"];

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => prevRotation - 72); // 360 degrees / 5 images = 72 degrees

            setTopImageIndex((prevIndex) => {
                const currentIndex = sequence.indexOf(prevIndex);
                const nextIndex = (currentIndex + 1) % sequence.length;
                return sequence[nextIndex];
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <Navbar />
            <div
                className={styles.background}
                style={{ backgroundImage: `url(${Product1})` }}
            ></div>
            <div className={styles.carouselWrapper}>
                <div
                    className={styles.carousel}
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.circle} ${styles.smallCircle} ${styles[`pos${index}`]} ${
                                index === sequence[(sequence.indexOf(topImageIndex) + 1) % sequence.length]
                                    ? styles.enlargeAnimation
                                    : ''
                            }`}
                        >
                            <img src={image} alt={`small ${index}`} />
                        </div>
                    ))}
                    <div className={`${styles.circle} ${styles.largeCircle}`}></div>
                </div>
            </div>
            <CircularCarousel/>
            {/* <div className={`${styles.circle} ${styles.quarterCircle}`}></div> */}
            <div className={styles.textWrapper}>
                {texts.map((text, index) => (
                    <div key={index} className={`${styles.text} ${index === topImageIndex ? styles.activeText : ''}`}>
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;
