'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
          EICAD <span>Group</span>
        </Link>

        {/* Desktop Links */}
        <div className={styles.navLinksWrapper}>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/#services">Services</Link></li>
          </ul>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className={styles.navActions}>
          <Link href="/contact" className={`btn btn-accent ${styles.navBtn}`}>
            Let's Talk
          </Link>
          
          <button 
            className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.open : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
          <li><Link href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
          <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
