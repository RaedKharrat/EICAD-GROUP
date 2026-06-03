import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../project-data";
import ProjectGallery from "./ProjectGallery";
import styles from "./project-detail.module.css";

interface ProjectPageProps {
  params: {
    slug: string;
  } | Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Project not found | EICAD Group",
      description: "This project could not be found.",
    };
  }

  return {
    title: `${project.title} | EICAD Group`,
    description: project.summary,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className={styles.heroImage}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.preTitle}>Project Detail</span>
            <div className={styles.heroTop}>
              <div className={styles.heroTextBlock}>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.subtitle}>{project.summary}</p>
              </div>
              <Link href="/projects" className={`btn btn-outline ${styles.backButton}`}>
                Back to Projects
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <span className={styles.metaBadge}>{project.category}</span>
              <span>{project.location}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewBody}>
              <span className={styles.preTitle}>Design Story</span>
              <h2 className={styles.overviewTitle}>
                Thoughtful architecture that feels contemporary, warm, and intentional.
              </h2>
              <p className={styles.overviewText}>{project.description}</p>

              <div className={styles.featureCards}>
                {project.highlights.map((highlight) => (
                  <article key={highlight} className={styles.featureCard}>
                    <p>{highlight}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className={styles.infoBlock}>
              <div className={styles.infoHeader}>
                <span className={styles.preTitle}>Project at a glance</span>
                <h3>Key data</h3>
              </div>
              <dl className={styles.infoDetails}>
                {project.details.map((detail) => (
                  <div key={detail.label} className={styles.detailRow}>
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <span className={styles.preTitle}>Visual Story</span>
            <h2>Project imagery</h2>
          </div>

          <ProjectGallery images={project.gallery} projectTitle={project.title} />
        </div>
      </section>
    </main>
  );
}
