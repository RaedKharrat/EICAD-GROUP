import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroClient from "@/components/HeroClient";
import HorizontalScrollTitle from "@/components/HorizontalScrollTitle";
import StatsMarquee from "@/components/StatsMarquee";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
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
            {/* <p className={styles.heroTagline}>{siteConfig.tagline}</p> */}
          </div>

          <div className={styles.heroBottom}>
            <div className={styles.heroBottomLeft}>
              <p className={styles.heroBottomSubtitle}>
                DESIGNING SPACES<br />
                THAT INSPIRE
              </p>
              
            </div>
            <div className={styles.heroBottomRight}>
              <p className={styles.heroLocation}>
                {siteConfig.experienceShort.toUpperCase()}
                <br />
                {siteConfig.locationsLine.toUpperCase().replace(/ · /g, " • ")}
              </p>
            </div>
          </div>
        </div>
        <StatsMarquee />
      </section>

      {/* Experience / services overview */}
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
              WHAT WE<br />
              <span className={styles.modernHighlight}>DO BEST</span>
            </h2>
            <p className={styles.experienceIntro}>
              From first sketch to final handover — architecture, construction, interiors, and renovation, tailored to you.
            </p>
          </div>

          <div className={styles.experienceGrid}>
            <div className={styles.experienceColumn}>
              <div className={styles.expContent}>
                <h3>Architecture</h3>
                <p>Thoughtful structures that balance light, comfort, and timeless modern design.</p>
              </div>
            </div>
            <div className={styles.experienceColumn}>
              <div className={styles.expContent}>
                <h3>Construction</h3>
                <p>Careful oversight on site so every detail matches the vision we planned together.</p>
              </div>
            </div>
            <div className={styles.experienceColumn}>
              <div className={styles.expContent}>
                <h3>Interior Design</h3>
                <p>Warm, refined interiors that feel personal — never copied from a catalogue.</p>
              </div>
            </div>
            <div className={styles.experienceColumn}>
              <div className={styles.expContent}>
                <h3>Renovation</h3>
                <p>Breathe new life into existing spaces with smart layouts and quality finishes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.bentoSection}>
        <div className={styles.bentoHeaderFull}>
          <div className="container">
            <HorizontalScrollTitle
              part1="DESIGN YOUR"
              part2="PERFECT"
              part3="SPACE"
            />
          </div>
        </div>

        <div className={styles.bentoGridFull}>
          <div className={`${styles.bentoItem} ${styles.bentoLarge}`} tabIndex={0}>
            <div className={styles.bentoContent}>
              <span className={styles.cardTeaser}>Architecture</span>
              <div className={styles.cardReveal}>
                <span className={styles.cardLabel}>01 — ARCHITECTURE</span>
                <h3>Built around<br />how you live</h3>
                <p>
                  From concept sketch to permit-ready drawings — we shape homes and commercial spaces with balanced proportions, natural light, and detailing built to last.
                </p>
                <Link href="/contact" className={styles.bentoLink}>
                  Discuss your project
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
            <Image src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" alt="Architecture" fill sizes="(max-width: 1024px) 100vw, 66vw" className={styles.bentoBg} />
            <div className={styles.bentoOverlay}></div>
          </div>

          <div className={styles.bentoItem} tabIndex={0}>
            <div className={styles.bentoContent}>
              <span className={styles.cardTeaser}>Interior Design</span>
              <div className={styles.cardReveal}>
                <span className={styles.cardLabel}>02 — INTERIOR DESIGN</span>
                <h3>One story<br />across every room</h3>
                <p>
                  Every finish, fixture, and layout choice supports how you live day to day — cohesive palettes, custom pieces, and lighting that feel intentional, never copied from a catalogue.
                </p>
                <Link href="/contact" className={styles.bentoLink}>
                  Explore interior design
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
            <Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" alt="Interior Design" fill sizes="(max-width: 1024px) 50vw, 33vw" className={styles.bentoBg} />
            <div className={styles.bentoOverlay}></div>
          </div>

          <div className={styles.bentoItem} tabIndex={0}>
            <div className={styles.bentoContent}>
              <span className={styles.cardTeaser}>Construction</span>
              <div className={styles.cardReveal}>
                <span className={styles.cardLabel}>03 — CONSTRUCTION</span>
                <h3>On site,<br />on spec</h3>
                <p>
                  We oversee contractors, milestones, and on-site quality so the build matches the design — clearer communication, tighter timelines, and fewer costly surprises along the way.
                </p>
                <Link href="/contact" className={styles.bentoLink}>
                  Talk construction
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              alt="Construction"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className={styles.bentoBg}
            />
            <div className={styles.bentoOverlay}></div>
          </div>

          <div className={styles.bentoItem} tabIndex={0}>
            <div className={styles.bentoContent}>
              <span className={styles.cardTeaser}>Renovation</span>
              <div className={styles.cardReveal}>
                <span className={styles.cardLabel}>04 — RENOVATION</span>
                <h3>More value<br />from what you have</h3>
                <p>
                  We unlock more from the structure you already have — smarter layouts, targeted structural work, and upgraded finishes without tearing everything down or living through a full rebuild.
                </p>
                <Link href="/contact" className={styles.bentoLink}>
                  Plan a renovation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea"
              alt="Renovation"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className={styles.bentoBg}
            />
            <div className={styles.bentoOverlay}></div>
          </div>
        </div>
      </section>

      {/* Eco — coming soon */}
      <section className={styles.ecoSection}>
        <div className={styles.ecoBgWrapper}>
          <Image
            src="/ProjectsAssets/p7/cover.jpg"
            alt="Eco Project Teaser"
            fill
            sizes="100vw"
            className={styles.ecoBgImage}
          />
          <div className={styles.ecoOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.ecoCard}>
            <span className={styles.ecoBadge}>{siteConfig.eco.badge}</span>
            <h2 className={styles.ecoTitle}>{siteConfig.eco.title}</h2>
            <p className={styles.ecoDesc}>{siteConfig.eco.description}</p>
          </div>
        </div>
      </section>

      <CTASection
        preTitle="Start Your Project"
        title="Ready to <span style={{ fontWeight: '600' }}>transform</span><br/>your space?"
        description="Tell us about your project — we'll get back to you with a friendly, no-pressure conversation."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}
