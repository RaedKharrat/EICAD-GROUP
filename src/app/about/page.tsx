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
      
      {/* Immersive Clean Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroText}>
            <span className={styles.preTitle}>About EICAD</span>
            <h1 className={styles.mainTitle}>
              We shape the future of modern living through visionary architecture.
            </h1>
            <p className={styles.heroDesc}>
              Since 2012, EICAD Group has been at the forefront of luxury design, transforming raw concepts into timeless landmarks across the globe.
            </p>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" 
            alt="EICAD Vision" 
            fill
            sizes="100vw"
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Modern Horizontal Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <h3>2012</h3>
              <p>Established</p>
            </div>
            <div className={styles.statBox}>
              <h3>250+</h3>
              <p>Completed Projects</p>
            </div>
            <div className={styles.statBox}>
              <h3>4</h3>
              <p>Global Hubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Split Philosophy */}
      <section className={styles.philosophy}>
        <div className="container">
          <div className={styles.philosophySplit}>
            <div className={styles.philosophyLeft}>
              <h2 className={styles.sectionTitle}>Philosophy of<br/>Light & Space</h2>
            </div>
            <div className={styles.philosophyRight}>
              <p>
                Our architectural approach is rooted in the philosophy of balancing extreme comfort with modern minimalism. We merge cutting-edge innovation with timeless craftsmanship to create spaces that breathe, inspire, and endure.
              </p>
              <p>
                Every structure tells a unique story, meticulously designed to serve as a functional masterpiece for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Minimalist Pillars */}
      <section className={styles.pillars}>
        <div className="container">
           <h2 className={styles.sectionTitle}>The Core of Our Work</h2>
        </div>
        
        <div className={styles.pillarsGrid}>
           <div className={styles.pillar}>
             <div className={styles.pillarHeader}>
               <span className={styles.pillarNum}>01</span>
               <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
               </svg>
             </div>
             <h3>Digital Mastery</h3>
             <p>Leveraging cutting-edge technology and intelligent materials to push the boundaries of modern architecture.</p>
           </div>
           
           <div className={styles.pillar}>
             <div className={styles.pillarHeader}>
               <span className={styles.pillarNum}>02</span>
               <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
               </svg>
             </div>
             <h3>Technical Excellence</h3>
             <p>A meticulous attention to detail that ensures every joint, surface, and light fixture is flawlessly executed.</p>
           </div>
           
           <div className={styles.pillar}>
             <div className={styles.pillarHeader}>
               <span className={styles.pillarNum}>03</span>
               <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
               </svg>
             </div>
             <h3>Timeless Legacy</h3>
             <p>Building structures that transcend trends, designed to stand as architectural landmarks for the future.</p>
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
