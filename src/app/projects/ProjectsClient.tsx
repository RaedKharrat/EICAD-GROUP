"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CTASection from "@/components/CTASection";
import styles from "./projects.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─────────────────────── Data ───────────────────────
const projects = [
  {
    id: "01",
    title: "THE GLASS HOUSE",
    category: "Architecture",
    location: "Tunis, Tunisia",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    span: "wide",
  },
  {
    id: "02",
    title: "MINIMALIST HAVEN",
    category: "Interior",
    location: "Montréal, Canada",
    year: "2023",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    span: "normal",
  },
  {
    id: "03",
    title: "URBAN VILLA",
    category: "Architecture",
    location: "Sfax, Tunisia",
    year: "2023",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    span: "normal",
  },
  {
    id: "04",
    title: "LUXE LIVING",
    category: "Interior",
    location: "Dubai, UAE",
    year: "2022",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    span: "normal",
  },
  {
    id: "05",
    title: "COASTAL RETREAT",
    category: "Architecture",
    location: "La Marsa, Tunisia",
    year: "2022",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    span: "wide",
  },
  {
    id: "06",
    title: "SKY PENTHOUSE",
    category: "Interior",
    location: "Tunis, Tunisia",
    year: "2021",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2067&auto=format&fit=crop",
    span: "normal",
  },
];

const disciplines = [
  {
    num: "01",
    title: "Architecture",
    desc: "Site-sensitive structures designed to endure as urban and private landmarks for generations.",
    count: "140+",
    label: "Projects",
  },
  {
    num: "02",
    title: "Interior",
    desc: "Refined interiors that blend material culture, functionality, and timeless elegance.",
    count: "90+",
    label: "Projects",
  },
  {
    num: "03",
    title: "Building",
    desc: "End-to-end construction oversight ensuring zero compromise from blueprint to handover.",
    count: "30+",
    label: "Projects",
  },
];

// ──────────────────────────────────────────────────────
export default function ProjectsClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Hero text reveal ──────────────────────────────
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .from(".js-pre-title", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".js-main-title .js-word",
          {
            opacity: 0,
            yPercent: 120,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".js-hero-meta",
          {
            opacity: 0,
            y: 24,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // ── Hero counter line scroll-scrub ─────────────────
      gsap.from(".js-hero-line", {
        scaleX: 0,
        transformOrigin: "left",
        ease: "none",
        scrollTrigger: {
          trigger: ".js-hero-line",
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      });

      // ── Stats count-up ────────────────────────────────
      ScrollTrigger.batch(".js-stat-val", {
        onEnter: (els) => {
          els.forEach((el) => {
            const target = Number(el.getAttribute("data-target"));
            gsap.fromTo(
              el,
              { textContent: 0 },
              {
                textContent: target,
                duration: 1.6,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate() {
                  el.textContent = Math.round(Number(el.textContent)) + "+";
                },
              }
            );
          });
        },
        start: "top 80%",
        once: true,
      });

      // ── Stat boxes slide-in ──────────────────────────
      gsap.from(".js-stat-box", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".js-stats-section",
          start: "top 75%",
        },
      });

      // ── Gallery cards stagger ────────────────────────
      ScrollTrigger.batch(".js-proj-card", {
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
          }),
        start: "top 88%",
      });

      // ── Disciplines section split ─────────────────────
      gsap.from(".js-discipline-left", {
        opacity: 0,
        x: -60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".js-disciplines-section",
          start: "top 70%",
        },
      });

      gsap.from(".js-discipline-item", {
        opacity: 0,
        x: 60,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".js-disciplines-section",
          start: "top 70%",
        },
      });

      // ── Approach section parallax image ──────────────
      gsap.to(".js-approach-img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".js-approach-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.from(".js-approach-text", {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".js-approach-section",
          start: "top 70%",
        },
      });

      // ── Section titles word-reveal ────────────────────
      gsap.utils.toArray<HTMLElement>(".js-reveal-title").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={styles.main}>
      {/* ─── HERO ──────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={`js-pre-title ${styles.preTitle}`}>
                Portfolio
              </span>
              <h1 className={`js-main-title ${styles.mainTitle}`}>
                {["Our", "Master", "Architectural", "Collection"].map((w) => (
                  <span key={w} className={styles.wordWrap}>
                    <span className={`js-word ${styles.word}`}>{w}</span>
                  </span>
                ))}
              </h1>
            </div>
            <div className={styles.heroRight}>
              <p className={`js-hero-meta ${styles.heroSubtitle}`}>
                A curated selection of our most celebrated projects — where
                vision, craft, and precision converge into architectural
                statements that endure.
              </p>
              <div className={`js-hero-meta ${styles.heroActions}`}>
                <Link href="/contact" className={`btn btn-accent ${styles.heroBtn}`}>
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll hint line */}
          <div className={styles.heroLineWrapper}>
            <div className={`js-hero-line ${styles.heroLine}`} />
            <span className={styles.heroLineLabel}>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────── */}
      <section className={`js-stats-section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { val: 250, suf: "+", label: "Completed Projects" },
              { val: 14, suf: "+", label: "Years of Mastery" },
              { val: 4, suf: "", label: "Global Hubs" },
              { val: 30, suf: "+", label: "Awards Won" },
            ].map((s, i) => (
              <div key={i} className={`js-stat-box ${styles.statBox}`}>
                <h3 className={styles.statNum}>
                  <span className="js-stat-val" data-target={s.val}>
                    {s.val}
                    {s.suf}
                  </span>
                </h3>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ───────────────────────────────────── */}
      <section className={styles.gallerySection}>
        <div className="container">
          <h2 className={`js-reveal-title ${styles.sectionTitle}`}>
            Selected <br />
            <em>Works</em>
          </h2>
        </div>
        <div className={styles.galleryGrid}>
          {projects.map((p) => (
            <article
              key={p.id}
              className={`js-proj-card ${styles.projectCard} ${
                p.span === "wide" ? styles.cardWide : ""
              }`}
              style={{ opacity: 0, transform: "translateY(60px)" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.projectImg}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Top label */}
              <span className={styles.projectLabel}>
                {p.id} — {p.category}
              </span>

              {/* Bottom info */}
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectLocation}>{p.location}</span>
                  <span className={styles.projectYear}>{p.year}</span>
                </div>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectCta}>View Project Detail →</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── DISCIPLINES ───────────────────────────────── */}
      <section
        className={`js-disciplines-section ${styles.disciplinesSection}`}
      >
        <div className="container">
          <div className={styles.disciplinesSplit}>
            {/* Left sticky heading */}
            <div className={`js-discipline-left ${styles.disciplinesLeft}`}>
              <span className={styles.preTitle}>Expertise</span>
              <h2 className={styles.sectionTitle}>
                Three <br />
                Disciplines,
                <br />
                One Vision.
              </h2>
            </div>

            {/* Right list */}
            <div className={styles.disciplinesRight}>
              {disciplines.map((d) => (
                <div
                  key={d.num}
                  className={`js-discipline-item ${styles.disciplineItem}`}
                >
                  <div className={styles.disciplineHeader}>
                    <span className={styles.disciplineNum}>{d.num}</span>
                    <div className={styles.disciplineCount}>
                      <strong>{d.count}</strong>
                      <span>{d.label}</span>
                    </div>
                  </div>
                  <h3 className={styles.disciplineTitle}>{d.title}</h3>
                  <p className={styles.disciplineDesc}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPROACH ──────────────────────────────────── */}
      <section className={`js-approach-section ${styles.approachSection}`}>
        <div className={styles.approachImageWrapper}>
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop"
            alt="EICAD Design Approach"
            fill
            sizes="100vw"
            className={`js-approach-img ${styles.approachImg}`}
            priority={false}
          />
          <div className={styles.approachOverlay} />
        </div>
        <div className={`js-approach-text ${styles.approachContent}`}>
          <div className="container">
            <span className={styles.preTitle}>Our Approach</span>
            <h2 className={styles.approachTitle}>
              Every detail is <br />
              <em>intentional.</em>
            </h2>
            <p className={styles.approachDesc}>
              We approach each project as a unique narrative — shaped by its
              context, culture, and the people who will inhabit it. From the
              first sketch to the final fixture, every decision is deliberate,
              every space considered.
            </p>
            <Link href="/about" className="btn btn-outline">
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <CTASection
        preTitle="Start Your Project"
        title={`Ready to <span style={{ fontWeight: '600' }}>build</span><br/>your legacy?`}
        description="Our team of expert architects and designers is ready to bring your vision to life."
        buttonText="Book a Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}
