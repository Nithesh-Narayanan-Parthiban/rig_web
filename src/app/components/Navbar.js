'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/app/styles/navbar.module.css';
import Link from 'next/link';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '@/redux/authSlice';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const sidebarLinksRef = useRef([]);
  const desktopLinksRef = useRef([]);
  const logoRef = useRef(null);
  const rigLogoRef = useRef(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About' },
    { href: '/Projects', label: 'Projects' },
    { href: '/Achievements', label: 'Achievements' },
    { href: '/Events', label: 'Events' },
    { href: '/Team', label: 'Team' }
  ];
  const contactLink = [{ href: '/Team', label: 'Team' }]
  const addLinks = [{ href: '/addProjects', label: 'Add-Projects' }, { href: '/addEvents', label: 'Add-Events' }]

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('/api/verify-token', {
          withCredentials: true
        });

        if (response.data.valid) {
          dispatch(login());
        } else {
          dispatch(logout());
        }
      } catch (error) {
        dispatch(logout());
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const handleAuth = async () => {
    if (isLogin) {
      try {
        await axios.post("/api/logout");
        dispatch(logout());
        localStorage.removeItem('token');
        router.push('/');
      } catch (error) {
        console.error("Logout failed", error);
      }
    } else {
      router.push('/login');
    }
  };

 function renderLinks(links, pathname, styles) {
  return links.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      className={`${styles.sidebarLink} ${pathname === href ? styles.active : ''}`}
    >
      {label}
    </Link>
  ));
}
 

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop && sidebarLinksRef.current.length && isSidebarVisible) {
      gsap.fromTo(
        sidebarLinksRef.current,
        { x: '100', opacity: 0 },
        {
          x: '0',
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    }
  }, [isSidebarVisible]);

  return (
    <>
      <div className={styles.navbar}>
        {/* Main logo */}
        <div className={styles.logo} ref={logoRef}>
          <Link href="/">
            <Image src="/nitc-logo-white-02.svg" width={280} height={150} alt="Logo" />
          </Link>
        </div>

        {/* Alternate logo */}
        <div className={styles.logonew} ref={rigLogoRef}>
          <Link href="/">
            <Image src="/nitc_logo_icon2.svg" width={60} height={60} alt="Logo" />
          </Link>
        </div>

        <div className={styles.links} ref={el => {
          if (el) desktopLinksRef.current = Array.from(el.querySelectorAll(`.${styles.link}`));
        }}>

          {renderLinks(navLinks,pathname,styles)}

          {isLogin && (
            <>
              <Link rel="preload" href="/addEvents" className={`${styles.sidebarLink} ${pathname === '/addEvents' ? styles.active : ''}`}>Add-Events</Link>
              <Link rel="preload" href="/addProjects" className={`${styles.sidebarLink} ${pathname === '/addProjects' ? styles.active : ''}`}>Add-Projects</Link>
            </>
          )}

          {renderLinks(contactLink,pathname,styles)}

        </div>

        {/* Desktop Logout Button Only */}
        {isLogin && (
          <button
            onClick={handleAuth}
            className={styles.authButton}
          >
            Logout
          </button>
        )}

        <div className={styles.rig}>
          <Link href="/">
            <div className={styles.logo} ref={rigLogoRef}>
              <Link href="/">
                <Image src="/rig logo blue.png" width={95} height={75} alt="Logo" />
              </Link>
            </div>
          </Link>
        </div>

        <button
          className={styles.menuButton}
          onClick={toggleSidebar}
          aria-label="Open Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 96 960 960" width="42">
            <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
          </svg>
        </button>

        <div
          className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : styles.hidden}`}
          ref={el => {
            if (el) sidebarLinksRef.current = Array.from(el.querySelectorAll(`.${styles.sidebarLink}`));
          }}
        >
          <button
            className={styles.closeButton}
            onClick={closeSidebar}
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 96 960 960" width="42">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </button>

          {renderLinks(navLinks,pathname,styles)}

          {isLogin && (
            <>
              {renderLinks(addLinks,pathname,styles)}
            </>
          )}

          {renderLinks([{ href: '/Contact', label: 'Contact' }],pathname,styles)}

          <Link href="/Contact" className={`${styles.sidebarLink} ${pathname === '/Contact' ? styles.active : ''}`}>Contact</Link>

          {/* Mobile Logout Button Only */}
          {isLogin && (
            <button
              onClick={handleAuth}
              className={styles.sidebarAuthButton}
            >
              Logout
            </button>
          )}
        </div>
      </div>
      <div className={styles.box}></div>
    </>
  );
};

export default Navbar;