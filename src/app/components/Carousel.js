'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "@/app/styles/carousel.module.css";
import Image from 'next/image';

const Carousel = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const slides = [
    { id: 1, image: '/cardImages/avibot.jpg', name: 'Avibot' },
    { id: 2, image: '/cardImages/quadruped.jpg', name: 'Quadruped' },
    { id: 3, image: '/cardImages/hospital-bed.jpg', name: 'Hospital Bed'}
  ];

  return (
    <>
      <div className={styles.title}>
        <div>PROJECTS</div>
      </div>
      <div className={styles.body}>
        {/* <div className={styles.container}> */}
          <Swiper
            onSwiper={setSwiperRef}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            pagination={{ type: 'bullets' }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={styles.card}>
                  <div className={styles.image}>
                    <Image 
                      src={slide.image} 
                      alt={slide.name} 
                      fill
                      // priority
                      // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.nameproject}>
                    <span className={styles.name}>{slide.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      {/* </div> */}
    </>
  );
};

export default Carousel;