'use client'
import React, { useState } from "react";
import styles from '@/app/styles/events.module.css';

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(3); 
  const images = [
    { src: "/eventImages/audience.jpeg", alt: "1", title: "R.I.G" },
    { src: "/eventImages/image2.jpeg", alt: "2", title: "R.I.G" },
    { src: "/eventImages/image3.jpeg", alt: "3", title: "R.I.G" },
    { src: "/eventImages/image4.jpeg", alt: "4", title: "R.I.G" },
    { src: "/eventImages/image5.jpeg", alt: "5", title: "R.I.G" },
    { src: "/eventImages/audience.jpeg", alt: "6", title: "R.I.G" },
    { src: "/eventImages/image2.jpeg", alt: "7", title: "R.I.G" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.sliderContainer}>
      <div className={styles.sliderImages}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.sliderImg} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <img src={image.src} alt={image.alt} />
            <h1 className={styles.he}>{image.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
