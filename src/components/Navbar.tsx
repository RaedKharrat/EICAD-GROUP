import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          EICAD <span>Group</span>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/#services">Services</Link></li>
        </ul>
        <Link href="/contact" className="btn btn-outline">Contact Us</Link>
      </div>
    </nav>
  );
}
