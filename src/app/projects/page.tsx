import Image from "next/image";
import styles from "./projects.module.css";

export const metadata = {
  title: "Projects | EICAD Group",
  description: "Explore our portfolio of contemporary luxury homes and commercial spaces.",
};

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: "The Glass House", category: "Architecture", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
    { id: 2, title: "Minimalist Haven", category: "Interior", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" },
    { id: 3, title: "Urban Villa", category: "Architecture", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, title: "Luxe Living", category: "Interior", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" },
    { id: 5, title: "The Courtyard", category: "Architecture", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" },
    { id: 6, title: "Modernist Office", category: "Commercial", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <h1 className="slide-up">OUR<br/><span style={{ fontWeight: '600' }}>PROJECTS</span></h1>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={`container ${styles.galleryGrid}`}>
          {projects.map((project, index) => (
            <div key={project.id} className={styles.projectCard} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.imageWrapper}>
                <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
