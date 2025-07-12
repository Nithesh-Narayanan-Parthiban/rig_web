'use client';
import React, { useEffect, useRef } from 'react';
import styles from "../Achievements/achieve.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AchievementReport() {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const sectionsRef = useRef([]);

  // Animation on mount and scroll
  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Image animation
    gsap.fromTo(imageRef.current, 
      { opacity: 0, scale: 0.8,y:-500 ,x:500 }, 
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.3 ,y:0 ,x:0 }
    );

    // Sections animation on scroll
    sectionsRef.current.forEach((section, i) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: i * 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.header} ref={headerRef}>
        <p className={styles.headerTitle}>Achievements</p>
   
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>ROBOTICS INTEREST GROUP (RIG) Annual Achievement Report</h1>

        {/* Section content */}
        <section className={styles.section} ref={el => sectionsRef.current[0] = el}>
          <h2 className={styles.sectionTitle}>Origo Workshop</h2>
          <p className={styles.sectionContent}>
            Conducted a two-day hands-on workshop introducing robotics for B23 students of NIT Calicut.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[1] = el}>
          <h2 className={styles.sectionTitle}>Robocon&apos;23</h2>
          <p className={styles.sectionContent}>
            Took part in Robocon&apos;23, an international robotics competition, and secured among the top position defeating all other NITs or IITs.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[2] = el}>
          <h2 className={styles.sectionTitle}>IInvenTiv mega R&D fair</h2>
          <p className={styles.sectionContent}>
            Two projects were selected from NIT, out of which one was from RIG. This project was presented in front of the Hon&apos;ble education minister of India.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[3] = el}>
          <h2 className={styles.sectionTitle}>Eyanthra&apos;23</h2>
          <p className={styles.sectionContent}>
            Two teams from RIG participated in the Eyanthra&apos;23 robotics competition organized by IIT Bombay. One team successfully completed all the assigned tasks, while the other team secured the top position in all India levels.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[4] = el}>
          <h2 className={styles.sectionTitle}>ISRO Rover Challenge</h2>
          <p className={styles.sectionContent}>
            Qualified for the second round of the ISRO Rover Challenge competition, with submissions for the second round due on May 15th.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[5] = el}>
          <h2 className={styles.sectionTitle}>UL space club lecture</h2>
          <p className={styles.sectionContent}>
            Conducted a one-day lecture on robotics followed by a mini expo for school students in UL Cyber Park.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[6] = el}>
          <h2 className={styles.sectionTitle}>Patent granted</h2>
          <p className={styles.sectionContent}>
            A patent was awarded for one of RIG&apos;s significant projects, the Hospital Bed, specifically designed to assist physically challenged patients.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[7] = el}>
          <h2 className={styles.sectionTitle}>Robocon&apos;24</h2>
          <p className={styles.sectionContent}>
            Advanced to the second round of Robocon&apos;24, and are currently engaged in the second stage of submissions.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[8] = el}>
          <h2 className={styles.sectionTitle}>KTX Expo</h2>
          <p className={styles.sectionContent}>
            Showcased AVIBOT, one of RIG&apos;s flagship projects, at the KTX Global, aiming to attract industry partnerships to make the product market-ready.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[9] = el}>
          <h2 className={styles.sectionTitle}>Disha Expo</h2>
          <p className={styles.sectionContent}>
            Represented NIT Calicut at Disha Expo&apos;23, showcasing a few RIG projects to higher secondary school students.
          </p>
        </section>

        <section className={styles.section} ref={el => sectionsRef.current[10] = el}>
          <h2 className={styles.sectionTitle}>Lab Visits</h2>
          <p className={styles.sectionContent}>
            Held several lab visits for school students, showcasing robotic technologies and ongoing projects in RIG.
          </p>
        </section>
      </main>
    </div>
  );
}
