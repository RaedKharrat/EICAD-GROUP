"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./projects.module.css";
import { projects } from "./project-data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  {
    num: "04",
    title: "Renovation",
    desc: "Thoughtful upgrades that respect what already works while elevating comfort and style.",
    count: "—",
    label: "Service",
  },
];

// ──────────────────────────────────────────────────────
export default function ProjectsClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Hero entrance ────────────────────────────────
      const heroTl = gsap.timeline({ delay: 0.15 });
      heroTl
        .from(".js-pre-title", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" })
        .from(
          ".js-main-title .js-word",
          { opacity: 0, yPercent: 110, duration: 1.1, stagger: 0.09, ease: "power4.out" },
          "-=0.4"
        )
        .from(
          ".js-hero-desc",
          { opacity: 0, y: 30, duration: 0.9, ease: "power3.out" },
          "-=0.5"
        );

      // ── Hero parallax image on scroll ───────────────
      gsap.to(".js-hero-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".js-hero-img-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ── Scroll hint line ─────────────────────────────
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

      // ── Disciplines (Pillars style) stagger ──────────
      gsap.from(".js-pillar-title", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-pillars-section", start: "top 75%" },
      });
      ScrollTrigger.batch(".js-pillar", {
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, stagger: 0.12, duration: 1, ease: "power3.out" }),
        start: "top 85%",
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
          <div className={styles.heroContent}>
            <span className={`js-pre-title ${styles.preTitle}`}>Portfolio</span>
            <h1 className={`js-main-title ${styles.mainTitle}`}>
              {["Our", "Master", "Architectural", "Collection."].map((w) => (
                <span key={w} className={styles.wordWrap}>
                  <span className={`js-word ${styles.word}`}>{w}</span>
                </span>
              ))}
            </h1>
            <p className={`js-hero-desc ${styles.heroDesc}`}>
              A curated selection of our most celebrated projects — where
              vision, craft, and precision converge into architectural
              statements that endure.
            </p>

            <div className={`js-hero-desc ${styles.heroActions}`}>
              <Link href="/contact" className={`btn btn-accent ${styles.heroBtn}`}>
                Start Your Project
              </Link>
            </div>

            {/* Hero line hint */}
            <div className={styles.heroLineWrapper}>
              <div className={`js-hero-line ${styles.heroLine}`} />
              <span className={styles.heroLineLabel}>Scroll to explore</span>
            </div>
          </div>
        </div>

        {/* Full-bleed parallax image */}
        <div className={`js-hero-img-wrap ${styles.heroImageWrapper}`}>
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop"
            alt="EICAD Portfolio"
            fill
            sizes="100vw"
            className={`js-hero-img ${styles.heroImage}`}
            priority
          />
          <div className={styles.imageOverlay} />
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────── */}
      <section className={`js-stats-section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { val: 14, suf: "+", label: "Years of expertise", countUp: true },
              { val: 4, suf: "", label: "Core services", countUp: true },
              { val: 2, suf: "", label: "Tunisia & Canada", countUp: true },
              { text: "Online", label: "Worldwide", countUp: false },
            ].map((s, i) => (
              <div key={i} className={styles.statBox}>
                <h3 className={styles.statNum}>
                  {"countUp" in s && s.countUp ? (
                    <span>
                      {s.val}
                      {s.suf}
                    </span>
                  ) : (
                    <span>{s.text}</span>
                  )}
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
          <header className={`js-reveal-title ${styles.sectionHeader}`}>
            <div className={styles.sectionHeaderMain}>
              <span className={styles.sectionEyebrow}>Our portfolio</span>
              <h2 className={styles.sectionHeading}>
                Selected <span className={styles.titleAccent}>work</span>
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Recent homes and spaces from our studio — open any project below to see photos, story, and details.
            </p>
          </header>
        </div>
        <div className={styles.galleryGrid}>
          {projects.map((p, i) => {
            let sizeClass = styles.cardMedium;
            if (i % 6 === 0) sizeClass = styles.cardLarge;
            else if (i % 6 === 3) sizeClass = styles.cardWide;
            else if (i % 6 === 4 || i % 6 === 5) sizeClass = styles.cardHalf;

            return (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className={`js-proj-card ${styles.projectCard} ${sizeClass}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className={styles.projectImg}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectLabel}>{p.category}</span>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectLocation}>{p.location}</span>
                    <span className={styles.projectYear}>{p.year}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── DISCIPLINES ───────────────────────────────── */}
      <section className={`js-pillars-section ${styles.pillars}`}>
        <div className="container">
          <header
            className={`js-pillar-title js-reveal-title ${styles.sectionHeader} ${styles.sectionHeaderCompact}`}
          >
            <div className={styles.sectionHeaderMain}>
              <span className={styles.sectionEyebrow}>What we offer</span>
              <h2 className={styles.sectionHeading}>
                Four services, <span className={styles.titleAccent}>one team</span>
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Architecture, interiors, construction, and renovation — coordinated so your project stays clear from start to finish.
            </p>
          </header>
        </div>
        <div className={styles.pillarsGrid}>
          {disciplines.map((d) => (
            <div
              key={d.num}
              className={`js-pillar ${styles.pillar}`}
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNum}>{d.num}</span>
                <div className={styles.disciplineCount}>
                  <strong>{d.count}</strong>
                  <span>{d.label}</span>
                </div>
              </div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
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
    </div>
  );
}
