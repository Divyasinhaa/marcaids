import React from 'react';
import styles from './CircularCarousel.module.css';

const CircularCarousel = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.text} style={{ transform: 'rotate(0deg) translateY(-110px)' }}>performance marketing</div>
      <div className={styles.text} style={{ transform: 'rotate(72deg) translateY(-110px)' }}>web design development</div>
      <div className={styles.text} style={{ transform: 'rotate(144deg) translateY(-110px)' }}>branding</div>
      <div className={styles.text} style={{ transform: 'rotate(216deg) translateY(-110px)' }}>social media management</div>
      <div className={styles.text} style={{ transform: 'rotate(288deg) translateY(-110px)' }}>content creation</div>
    </div>
  );
};

export default CircularCarousel;