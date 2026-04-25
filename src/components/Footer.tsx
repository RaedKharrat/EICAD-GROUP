import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <h2><span style={{ fontWeight: '600' }}>EICAD</span> <span>Group</span></h2>
          <p>Designing Spaces That Inspire. Luxury architecture and premium interior design.</p>
        </div>
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Email: contact@eicadgroup.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} EICAD Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
