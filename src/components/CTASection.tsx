import Link from 'next/link';
import Image from 'next/image';
import styles from './CTASection.module.css';

interface CTASectionProps {
  preTitle?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  bgImage?: string;
}

export default function CTASection({ 
  preTitle, 
  title, 
  description, 
  buttonText, 
  buttonHref,
  bgImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
}: CTASectionProps) {
  return (
    <section className={styles.cta}>
      <Image 
        src={bgImage} 
        alt="" 
        fill 
        sizes="100vw" 
        className={styles.bgImage}
      />
      <div className={styles.overlay}></div>
      <div className={`container ${styles.ctaInner}`}>
        <div className={styles.ctaContent}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{description}</p>
          <Link href={buttonHref} className={styles.ctaBtn}>
            {buttonText}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
