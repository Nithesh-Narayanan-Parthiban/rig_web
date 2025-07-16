'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/app/styles/landing.module.css';

export const Landing = () => {
  const images = ['/group-photo2.png', '/group-photo.png' ,'/expo-explanation.jpg','/eventImages/audience.jpeg']; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const newsItems = [
    '• Latest update on Robotics.',
    '• AI advancements in 2024.',
    '• Innovation in automation.',
    '• Upcoming tech conferences.',
    '• Breakthrough in quantum computing.',
    '• New VR technologies emerging.',
    '• Advances in renewable energy.',
    '• Cybersecurity trends to watch.',
    '• Space exploration milestones.',
    '• The future of blockchain technology.'
  ]; // Array of news items

  // Update the image index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
      <div className={styles.landing}>
        <div className={styles.hero}>
          <div className={styles.img}>
            <Image 
              src={images[currentImageIndex]} // Use the current image index
              alt='Rig insights'
              layout="fill"
              style={{ objectFit: 'cover' }} // Adjust this as per your need
              priority
            />
          </div>
          <div className={styles.right}>
            <div className={styles.text}>
              Latest news
              <hr />
            </div>
            <div className={styles.newsTicker}>
              <div className={styles.news}>
                {newsItems.map((item, index) => (
                  <div key={index} className={styles.newsItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Landing;