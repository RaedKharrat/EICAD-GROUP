import Image from "next/image";
import styles from "./about.module.css";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "About Us | EICAD Group",
  description: "Discover the vision, mastery, and architectural philosophy of EICAD Group.",
};

export default function AboutPage() {
  return (
    <div className={styles.main}>
      {/* About Hero - Massive Asimovian Style */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.preTitle}>01 — OUR LEGACY</span>
          <h1 className={styles.mainTitle}>
            CRAFTING<br/>
            ARCHITECTURAL<br/>
            MASTERPIECES
          </h1>
        </div>
        
        <div className={styles.heroImageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
            alt="EICAD Design Studio" 
            fill
            sizes="100vw"
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroFloatingCard}>
            <p>
              EICAD Group is a premier architecture firm dedicated to visionary 
              design and human-centric living. Since 2008, we have transformed 
              raw ideas into iconic, timeless structures.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Editorial Split */}
      <section className={styles.philosophy}>
        <div className="container">
          <div className="splitHeader">
            <div>
              <span className={styles.preTitle}>02 — VISION</span>
              <h2 className={styles.philosophyTitle}>
                PHILOSOPHY OF<br/>
                LIGHT & SPACE
              </h2>
            </div>
            <div className="splitHeaderRight">
              <p className="splitHeaderDesc">
                We believe that every structure should tell a story while serving as a functional masterpiece for generations to come.
              </p>
            </div>
          </div>
          
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyContent}>
              <p>
                Our architectural approach is rooted in the "Luxury Nordic" philosophy—where 
                minimalism meets extreme comfort. We merge modern innovation with 
                timeless craftsmanship to create spaces that breathe and inspire.
              </p>
            </div>
            <div className={styles.philosophyStats}>
              <div className={styles.statItem}>
                <h3>15+</h3>
                <p>Years of Mastery</p>
              </div>
              <div className={styles.statItem}>
                <h3>200+</h3>
                <p>Global Projects</p>
              </div>
              <div className={styles.statItem}>
                <h3>30+</h3>
                <p>Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars - Bento Full Width Style */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.pillarsHeader}>
            <span className={styles.preTitle} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>03 — EXCELLENCE</span>
            <h2 className={styles.mainTitle} style={{ marginBottom: '2rem' }}>
              THE CORE<br/>
              OF OUR WORK
            </h2>
          </div>
        </div>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>01 — INNOVATION</span>
            <h3>DIGITAL<br/>MASTERY</h3>
            <p>Leveraging cutting-edge technology and materials to push the boundaries of what's possible in architecture.</p>
          </div>
          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>02 — PRECISION</span>
            <h3>TECHNICAL<br/>EXCELLENCE</h3>
            <p>A meticulous attention to detail that ensures every joint, surface, and light fixture is perfectly placed.</p>
          </div>
          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>03 — LEGACY</span>
            <h3>TIMELESS<br/>DESIGN</h3>
            <p>Building structures that aren't just for today, but are designed to stand as timeless landmarks.</p>
          </div>
        </div>
      </section>

      <FAQSection />

      <CTASection
        preTitle="Work With Us"
        title="Ready to <span style={{ fontWeight: '600' }}>build</span><br/>your legacy?"
        description="Our team of expert architects and designers is ready to bring your vision to life."
        buttonText="Start Your Journey"
        buttonHref="/contact"
      />
    </div>
  );
}
