import Image from "next/image";
import styles from "./projects.module.css";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Projects | EICAD Group",
  description: "Explore our portfolio of contemporary luxury homes and commercial spaces.",
};

export default function ProjectsPage() {
  const projects = [
    { id: "01", title: "THE GLASS HOUSE", category: "ARCHITECTURE", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
    { id: "02", title: "MINIMALIST HAVEN", category: "INTERIOR", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" },
    { id: "03", title: "URBAN VILLA", category: "ARCHITECTURE", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" },
    { id: "04", title: "LUXE LIVING", category: "INTERIOR", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className={styles.main}>
      {/* Projects Header - Massive Asimovian */}
      <section className={styles.header}>
        <div className="container">
          <span className={styles.preTitle}>PORTFOLIO</span>
          <h1 className={styles.mainTitle}>
            OUR MASTER<br/>
            ARCHITECTURAL<br/>
            COLLECTION
          </h1>
        </div>
      </section>

      {/* Panoramic Gallery - Edge to Edge */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <span className={styles.projectLabel}>{project.id} — {project.category}</span>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw" 
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>VIEW PROJECT DETAIL</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        preTitle="Start Your Project"
        title="Ready to <span style={{ fontWeight: '600' }}>build</span><br/>your legacy?"
        description="Our team of expert architects and designers is ready to bring your vision to life."
        buttonText="Book a Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}
