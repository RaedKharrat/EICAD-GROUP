import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top: Brand & Call to Action */}
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <p className={styles.tagline}>
              DESIGNING SPACES THAT INSPIRE.<br />
              LUXURY ARCHITECTURE & INTERIOR DESIGN.
            </p>
          </div>

          <div className={styles.actionArea}>
            <span className={styles.actionText}>HAVE A VISION?</span>
            <Link href="/contact" className={styles.contactBtn}>
              LET'S TALK
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Middle: Grid of Links */}
        <div className={styles.middleSection}>
          <div className={styles.column}>
            <h3>SOCIAL</h3>
            <ul>
              <li><a href="https://www.instagram.com/eicad_group/" target="_blank" rel="noopener noreferrer" className={styles.linkHover}>Instagram</a></li>
              <li><a href="#" className={styles.linkHover}>LinkedIn</a></li>
              <li><a href="#" className={styles.linkHover}>Pinterest</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>EXPLORE</h3>
            <ul>
              <li><Link href="/projects" className={styles.linkHover}>Projects Gallery</Link></li>
              <li><Link href="/about" className={styles.linkHover}>About Us</Link></li>
              <li><Link href="/journal" className={styles.linkHover}>Journal</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>CONTACT</h3>
            <ul>
              <li><a href="mailto:Contact.eicadgroup@gmail.com" className={styles.linkHover}>Contact.eicadgroup@gmail.com</a></li>
              <li><a href="tel:+21655566531" className={styles.linkHover}>+216 55 566 531 (Tunis)</a></li>
              <li><a href="tel:+14384057422" className={styles.linkHover}>+1 438 405 7422 (Canada)</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>LOCATION</h3>
            <p className={styles.locationText}>
              128 RUE DE RIVOLI<br />
              75001 PARIS, FRANCE
            </p>
          </div>
        </div>

        {/* Bottom: Giant Typography & Copyright */}
        <div className={styles.bottomSection}>
          <h1 className={styles.giantText}>
            EICAD
          </h1>

          <div className={styles.bottomMeta}>
            <p>&copy; {new Date().getFullYear()} EICAD GROUP. ALL RIGHTS RESERVED.</p>
            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.linkHover}>PRIVACY POLICY</Link>
              <Link href="/terms" className={styles.linkHover}>TERMS OF SERVICE</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
