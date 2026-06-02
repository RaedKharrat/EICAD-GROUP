"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/siteConfig";
import styles from "./about.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─────────────── Data ───────────────────────────────────
const pillars = [
  {
    num: "01",
    title: "Digital Mastery",
    desc: "Leveraging cutting-edge technology and intelligent materials to push the boundaries of modern architecture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Technical Excellence",
    desc: "A meticulous attention to detail that ensures every joint, surface, and light fixture is flawlessly executed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Timeless Legacy",
    desc: "Building structures that transcend trends, designed to stand as architectural landmarks for the future.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2012", label: "Founded in Tunis", desc: "EICAD Group established with a vision to redefine architectural excellence in North Africa." },
  { year: "2015", label: "International Expansion", desc: "Opened our Canadian hub in Montréal, bridging Mediterranean design with North American precision." },
  { year: "2018", label: "250 Projects Milestone", desc: "Celebrated the completion of our 250th project — a portfolio spanning residential, commercial & cultural landmarks." },
  { year: "2022", label: "30+ Awards", desc: "Recognised globally with over 30 prestigious architecture and design awards across 4 countries." },
  { year: "2024", label: "The Future", desc: "Expanding into sustainable smart-home architecture and mixed-use urban developments." },
];

// ────────────────────────────────────────────────────────
export default function AboutClient() {
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

      // ── Stats section ────────────────────────────────
      gsap.from(".js-stat-box", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-stats-section", start: "top 75%" },
      });

      // ── Philosophy split (fade columns only; paragraphs slide — avoids stacked opacity: 0)
      const philoTrigger = ".js-philo-section";
      const philoScroll = () => ({
        trigger: philoTrigger,
        start: "top 75%",
        once: true,
        toggleActions: "play none none none",
      });
      gsap.from(".js-philo-left", {
        opacity: 0,
        x: -40,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: philoScroll(),
      });
      gsap.from(".js-philo-right", {
        opacity: 0,
        x: 40,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: philoScroll(),
      });
      gsap.from(".js-philo-p", {
        y: 24,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: philoScroll(),
      });

      // ── Pillars stagger from bottom ──────────────────
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

      // ── Timeline items stagger ───────────────────────
      ScrollTrigger.batch(".js-milestone", {
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, x: 0, stagger: 0.15, duration: 0.9, ease: "power3.out" }),
        start: "top 85%",
      });

      // ── Timeline line draw ───────────────────────────
      gsap.from(".js-timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".js-timeline-section",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1.2,
        },
      });

      // ── Generic section title reveals ────────────────
      gsap.utils.toArray<HTMLElement>(".js-reveal-title").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
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
            <span className={`js-pre-title ${styles.preTitle}`}>About EICAD</span>
            <h1 className={`js-main-title ${styles.mainTitle}`}>
              {["We", "shape", "the", "future", "of", "modern", "living."].map((w) => (
                <span key={w} className={styles.wordWrap}>
                  <span className={`js-word ${styles.word}`}>{w}</span>
                </span>
              ))}
            </h1>
            <p className={`js-hero-desc ${styles.heroDesc}`}>
              {siteConfig.shortDescription}
              <br /><br />
              Our expertise spans: <strong>{siteConfig.services.join(", ")}</strong>.
            </p>

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
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
            alt="EICAD Vision"
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
              { val: "2012", label: "Established" },
              { val: "250+", label: "Completed Projects" },
              { val: "4",    label: "Global Hubs" },
              { val: "30+",  label: "Awards Won" },
            ].map((s, i) => (
              <div key={i} className={`js-stat-box ${styles.statBox}`}>
                <h3 className={styles.statNum}>{s.val}</h3>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ────────────────────────────────── */}
      <section className={`js-philo-section ${styles.philosophy}`}>
        <div className="container">
          <div className={styles.philosophySplit}>
            <div className={`js-philo-left ${styles.philosophyLeft}`}>
              <h2 className={`js-reveal-title ${styles.sectionTitle}`}>
                Philosophy of<br />Light <em>&amp;</em> Space
              </h2>
            </div>
            <div className={`js-philo-right ${styles.philosophyRight}`}>
              <p className="js-philo-p">
                Our architectural approach is rooted in the philosophy of balancing extreme comfort with modern minimalism. We merge cutting-edge innovation with timeless craftsmanship to create spaces that breathe, inspire, and endure.
              </p>
              <p className="js-philo-p">
                Every structure tells a unique story, meticulously designed to serve as a functional masterpiece for generations to come.
              </p>
              <div className={`js-philo-p ${styles.philosophyLink}`}>
                <Link href="/projects" className="btn btn-outline">
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILLARS ───────────────────────────────────── */}
      <section className={`js-pillars-section ${styles.pillars}`}>
        <div className="container">
          <h2 className={`js-pillar-title js-reveal-title ${styles.sectionTitle}`}>
            The Core of <em>Our Work</em>
          </h2>
        </div>
        <div className={styles.pillarsGrid}>
          {pillars.map((p) => (
            <div
              key={p.num}
              className={`js-pillar ${styles.pillar}`}
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNum}>{p.num}</span>
                <span className={styles.pillarIcon}>{p.icon}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TIMELINE ──────────────────────────────────── */}
      <section className={`js-timeline-section ${styles.timelineSection}`}>
        <div className="container">
          <h2 className={`js-reveal-title ${styles.sectionTitle}`}>
            Our <em>Journey</em>
          </h2>

          <div className={styles.timelineWrapper}>
            {/* Vertical spine */}
            <div className={styles.timelineTrack}>
              <div className={`js-timeline-line ${styles.timelineLine}`} />
            </div>

            {/* Milestone items */}
            <div className={styles.milestones}>
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`js-milestone ${styles.milestone} ${
                    i % 2 === 0 ? styles.milestoneLeft : styles.milestoneRight
                  }`}
                  style={{ opacity: 0, transform: i % 2 === 0 ? "translateX(-40px)" : "translateX(40px)" }}
                >
                  <div className={styles.milestoneCard}>
                    <span className={styles.milestoneYear}>{m.year}</span>
                    <h3 className={styles.milestoneLabel}>{m.label}</h3>
                    <p className={styles.milestoneDesc}>{m.desc}</p>
                  </div>
                  <div className={styles.milestoneDot} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────── */}
      <FAQSection />

      {/* ─── CTA ───────────────────────────────────────── */}
      <CTASection
        preTitle="Work With Us"
        title={`Ready to <span style={{ fontWeight: '600' }}>build</span><br/>your legacy?`}
        description="Our team of expert architects and designers is ready to bring your vision to life."
        buttonText="Start Your Journey"
        buttonHref="/contact"
      />
    </div>
  );
}
