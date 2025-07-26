'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from "@/app/styles/footer.module.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { socialLinks } from '@/utils/socialLinks'; // import new social links

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const socialIconsRef = useRef([]);
  const addressRef = useRef(null);
  const linksRef = useRef([]);
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out',
          scrollTrigger: {
            trigger: logoRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (socialIconsRef.current.length) {
      gsap.fromTo(
        socialIconsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: 'power2.out',
          scrollTrigger: {
            trigger: socialIconsRef.current[0],
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (addressRef.current) {
      gsap.fromTo(
        addressRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: {
            trigger: addressRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (linksRef.current.length) {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.4, ease: 'power2.out',
          scrollTrigger: {
            trigger: linksRef.current[0],
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <>
      <center><div className={styles.text1}>CONTACT US</div></center>
      <div className={styles.contact}>
        <div className={styles.up}>
          <div className={styles.child1}>
            <span>SOCIAL HANDLES</span>
          </div>

          {/* Updated child2 social icon section */}
          <div className={styles.child2}>
            {socialLinks.map(({ name, href, Icon }, index) => (
              <div
                key={name}
                className={styles.icons}
                ref={el => socialIconsRef.current[index] = el}
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <Icon className={styles.icon} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.boxtitle}>
            <span className={styles.navigate}>NAVIGATION</span>
          </div>
          <div className={styles.boxmenu}>
            <a className={styles.list} href="/">HOME</a>
            <a className={styles.list} href="/About">ABOUT US</a>
            <a className={styles.list} href="/Projects">PROJECTS</a>
            <a className={styles.list} href="/Achievements">ACHEIVEMENTS</a>
            <a className={styles.list} href="/Events">EVENTS</a>
            <a className={styles.list} href="/Team">TEAM</a>
            <a className={styles.list} href="/Contact">CONTACTS</a>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.down}>
          <div className={styles.add} ref={addressRef}>
            <div className={styles.address}>ADDRESS</div>
            <p>
              MECHATRONICS/ROBOTICS LAB
              <br />
              MECHANICAL ENGINEERING DEPARTMENT
              <br />
              NATIONAL INSTITUTE OF TECHNOLOGY CALICUT, NITC CAMPUS
              <br />
              P.O.- KOZHIKODE, KERALA, INDIA
              <br />
              PIN- 673601
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
