import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import Hero3DBackground from "@/components/Hero3DBackground";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section - Estato Style */}
      <section className={styles.hero}>
        <Hero3DBackground />
        <div className={`container ${styles.heroContainer}`}>

          <div className={styles.heroTopGrid}>
            <div className={`${styles.titleWrapper} slide-up`}>
              <h1 className={styles.mainTitle}>
                <span style={{ fontWeight: '600' }}>FUTURE</span><br />
                OF <span style={{ fontWeight: '600' }}>MODERN</span><br />
                LIVING
              </h1>
            </div>

            <div className={styles.heroRightContent}>
              <div className={`${styles.sideDescWrapper} fade-in`} style={{ animationDelay: "0.2s" }}>
                <p className={styles.sideDesc}>
                  We design architecture that contributes to lively, human-centered communities.
                </p>
              </div>
              <div className="arrowCircleWrapper fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="arrowCircle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="7" y1="7" x2="17" y2="17"></line>
                    <polyline points="17 7 17 17 7 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.heroImageWrapper} slide-up`} style={{ animationDelay: "0.4s" }}>
            <ScrollStack
              itemDistance={100}
              itemScale={0.06}
              itemStackDistance={20}
              stackPosition="28%"
              scaleEndPosition="15%"
              baseScale={0.9}
              blurAmount={1}
              useWindowScroll={true}
            >
              {[
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
              ].map((src, i) => (
                <ScrollStackItem key={i}>
                  <Image src={src} alt="Architecture" fill sizes="100vw" style={{ objectFit: 'cover' }} priority={i === 0} />
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projectsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}><span style={{ fontWeight: '600' }}>EXPERIENCE</span><br />CONTEMPORARY<br /><span style={{ fontWeight: '600' }}>LUXURY</span></h2>
            <div className={styles.sectionDesc}>
              <p>Explore an exclusive showcase of contemporary homes where architectural innovation meets refined comfort.</p>
              <Link href="/projects" className={styles.exploreLink}>
                OUR PROJECTS
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" alt="Minimalist Interior" fill sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" alt="White Villa Exterior" fill sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Modern Hallway" fill sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Luxury Pool" fill sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.bentoSection}>
        <div className="container">
          <div className="splitHeader">
            <div>
              <h2 className={`${styles.sectionTitle} textWhite`}><span style={{ fontWeight: '600' }}>OUR</span><br />MASTER<br /><span style={{ fontWeight: '600' }}>SERVICES</span></h2>
            </div>
            <div className="splitHeaderRight">
              <p className="splitHeaderDesc textLightMuted">
                We provide end-to-end luxury architectural services, turning ambitious concepts into flawless realities.
              </p>
              <div className="arrowCircleWrapper">
                <div className="arrowCircle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="7" y1="7" x2="17" y2="17"></line>
                    <polyline points="17 7 17 17 7 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoItem} ${styles.bentoLarge}`}>
              <div className={styles.bentoContent}>
                <h3>Architecture Design</h3>
                <p>Premium properties & luxury living spaces.</p>
                <Link href="/contact" className={styles.bentoLink}>
                  Start Building
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
              <Image src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" alt="Architecture" fill sizes="(max-width: 1024px) 100vw, 66vw" className={styles.bentoBg} />
              <div className={styles.bentoOverlay}></div>
            </div>

            <div className={styles.bentoItem}>
              <div className={styles.bentoContent}>
                <h3>Interior Design</h3>
                <p>Curated spaces for refined comfort.</p>
              </div>
              <Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" alt="Interior Design" fill sizes="(max-width: 1024px) 50vw, 33vw" className={styles.bentoBg} />
              <div className={styles.bentoOverlay}></div>
            </div>

            <div className={styles.bentoItem}>
              <div className={styles.bentoContent}>
                <h3>Construction</h3>
                <p>Flawless execution & project management.</p>
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
                <h3>Online Consulting</h3>
                <p>Expert architectural advice from anywhere.</p>
                <a href="https://archiconsult.com" target="_blank" rel="noopener noreferrer" className={styles.bentoAccentLink}>
                  Book on ArchiConsult
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
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
