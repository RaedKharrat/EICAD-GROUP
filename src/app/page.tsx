import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroClient from "@/components/HeroClient";
import ScrollReveal from "@/components/ScrollReveal";
import HorizontalScrollTitle from "@/components/HorizontalScrollTitle";
import StatsMarquee from "@/components/StatsMarquee";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section - Glasshaven Style */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d"
            alt="Luxury Architecture"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay}></div>
          <HeroClient />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroTop}>
            <h1 className={styles.heroMainTitle}>EICAD GROUP</h1>
          </div>

          <div className={styles.heroBottom}>
            <div className={styles.heroBottomLeft}>
              <p className={styles.heroBottomSubtitle}>
                A NEW STANDARD<br />
                OF MODERN LIVING
              </p>
            </div>
            <div className={styles.heroBottomRight}>
              <p className={styles.heroLocation}>
                EST. 2008<br />
                DUBAI, UAE
              </p>
            </div>
          </div>
        </div>
        <StatsMarquee />
      </section>



      {/* Full Width Experience Section - Image Reference Style */}
      <section className={styles.experienceSection}>
        <div className={styles.experienceBg}>
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
            alt="Contemporary Luxury"
            fill
            className={styles.experienceImage}
          />
          <div className={styles.experienceOverlay}></div>
        </div>

        <div className={`container ${styles.experienceContainer}`}>
          <div className={styles.experienceHeader}>
            <h2 className={styles.sectionTitle}>
              EXPERIENCE<br />
              <span className={styles.modernHighlight}>CONTEMPORARY</span><br />
              LUXURY
            </h2>
          </div>

          <div className={styles.experienceGrid}>
            <div className={styles.experienceColumn}>
              <div className={styles.expContent}>
                <h3>Architectural Design</h3>
                <p>We create unique buildings that perfectly combine function, aesthetics and innovation.</p>
              </div>
            </div>
            <div className={styles.experienceColumn}>
              <div className={styles.expContent}>
                <h3>Interior Design</h3>
                <p>Creating environments that inspire and provide a unique living experience for every client.</p>
              </div>
            </div>
            <div className={styles.experienceColumn}>
              <div className={styles.expContent}>
                <h3>BIM Modeling</h3>
                <p>Using advanced 3D technology to ensure precision in every detail of the project.</p>
              </div>
            </div>
            <div className={styles.experienceColumn}>
              <div className={styles.expContent}>
                <h3>Landscape Design</h3>
                <p>Developing outdoor spaces that harmonize with the architecture and nature.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.bentoSection}>
        <div className={styles.bentoHeaderFull}>
          <div className="container">
            <HorizontalScrollTitle 
              part1="OUR MASTER" 
              part2="SERVICES" 
              part3="EXCELLENCE"
            />
          </div>
        </div>

        <div className={styles.bentoGridFull}>
          <div className={`${styles.bentoItem} ${styles.bentoLarge}`}>
            <div className={styles.bentoContent}>
              <span className={styles.cardLabel}>01 — ARCHITECTURE</span>
              <h3>Premium Design &<br />Structural Excellence</h3>
              <p>We craft iconic properties that redefine luxury living through innovative architectural solutions.</p>
              <Link href="/contact" className={styles.bentoLink}>
                Start Your Journey
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
            <Image src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" alt="Architecture" fill sizes="(max-width: 1024px) 100vw, 66vw" className={styles.bentoBg} />
            <div className={styles.bentoOverlay}></div>
          </div>

          <div className={styles.bentoItem}>
            <div className={styles.bentoContent}>
              <span className={styles.cardLabel}>02 — INTERIORS</span>
              <h3>Curated Living<br />Spaces</h3>
              <p>Tailored interiors that reflect your personal vision of comfort and elegance.</p>
            </div>
            <Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" alt="Interior Design" fill sizes="(max-width: 1024px) 50vw, 33vw" className={styles.bentoBg} />
            <div className={styles.bentoOverlay}></div>
          </div>

          <div className={styles.bentoItem}>
            <div className={styles.bentoContent}>
              <span className={styles.cardLabel}>03 — BUILD</span>
              <h3>Elite Construction<br />Management</h3>
              <p>Precision execution and flawless project delivery at every scale.</p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              alt="Construction Site"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className={styles.bentoBg}
            />
            <div className={styles.bentoOverlay}></div>
          </div>

          <div className={`${styles.bentoItem} ${styles.bentoWide} ${styles.bentoAccent}`}>
            <div className={styles.bentoContent}>
              <div className={styles.badgeRow}>
                <span className={styles.accentBadge}>ONLINE SERVICE</span>
              </div>
              <h3 className={styles.accentTitle}>Personalized Architectural Consulting</h3>
              <p className={styles.accentDesc}>Gain direct access to our world-class lead architects from anywhere in the world. Get expert feedback on your vision, technical feasibility, and modern design trends.</p>
              <a href="https://archiconsult.com" target="_blank" rel="noopener noreferrer" className={styles.bentoAccentLink}>
                Book Your Expert Session
              </a>
            </div>

            <div className={styles.bentoSideArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>

            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Consulting Office"
              fill
              sizes="100vw"
              className={styles.bentoBg}
            />
            <div className={styles.bentoAccentOverlay}></div>
          </div>
        </div>
      </section>

      <CTASection
        preTitle="Start Your Project"
        title="Ready to <span style={{ fontWeight: '600' }}>transform</span><br/>your space?"
        description="Our experts are ready to turn your vision into an architectural reality."
        buttonText="Consult With Us"
        buttonHref="/contact"
      />
    </div>
  );
}
