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
      {/* About Hero - Panoramic Layout */}
      <section className={styles.hero}>
        <div className="container">
          <div className="splitHeader">
            <div>
              <span className={styles.preTitle}>Our Story</span>
              <h1 className={styles.mainTitle}>
                <span style={{ fontWeight: '600' }}>CRAFTING</span><br/>
                LEGACIES<br/>
                <span style={{ fontWeight: '600' }}>IN STONE & LIGHT</span>
              </h1>
            </div>
            <div className="splitHeaderRight">
              <p className="splitHeaderDesc">
                Since 2008, EICAD Group has been at the forefront of luxury architectural innovation, building spaces that define generations.
              </p>
              <div className="arrowCircleWrapper">
                <div className="arrowCircle arrowCircleBlack">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="7" y1="7" x2="17" y2="17"></line>
                    <polyline points="17 7 17 17 7 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.heroImageWrapper} fade-in`} style={{ animationDelay: "0.3s" }}>
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
                design and human-centric living. We transform raw ideas into 
                iconic, timeless structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <div className="container">
          <div className="splitHeader">
            <div>
              <span className={styles.preTitle}>Our Philosophy</span>
              <h2 className={styles.philosophyTitle}>
                <span style={{ fontWeight: '600' }}>CRAFTING</span><br/>
                LEGACIES<br/>
                <span style={{ fontWeight: '600' }}>IN STONE & LIGHT</span>
              </h2>
            </div>
            <div className="splitHeaderRight">
              <p className="splitHeaderDesc">
                We believe that every structure should tell a story while serving as a functional masterpiece for generations to come.
              </p>
              <div className="arrowCircleWrapper">
                <div className="arrowCircle arrowCircleBlack">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="7" y1="7" x2="17" y2="17"></line>
                    <polyline points="17 7 17 17 7 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyContent}>
              <p>
                Founded on the principles of architectural excellence, EICAD Group merges 
                modern luxury with sustainable practices.
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

      {/* Core Pillars - Bento Style */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className="splitHeader">
            <div>
              <h2 className={styles.sectionTitle}><span style={{ fontWeight: '600' }}>THE CORE</span><br/>OF OUR<br/><span style={{ fontWeight: '600' }}>WORK</span></h2>
            </div>
            <div className="splitHeaderRight">
              <p className="splitHeaderDesc">
                Our foundation is built upon three pillars of excellence, ensuring every project exceeds expectations.
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
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>01</div>
              <h3>Innovation</h3>
              <p>Leveraging cutting-edge technology and materials to push the boundaries of what's possible in architecture.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>02</div>
              <h3>Mastery</h3>
              <p>A meticulous attention to detail that ensures every joint, surface, and light fixture is perfectly placed.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>03</div>
              <h3>Legacy</h3>
              <p>Building structures that aren't just for today, but are designed to stand as timeless landmarks.</p>
            </div>
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
