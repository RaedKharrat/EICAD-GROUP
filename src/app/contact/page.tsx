"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import { siteConfig } from "@/lib/siteConfig";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Hero Text
    tl.from(".gsap-hero-text", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    });

    // Hero Image Initial Fade
    tl.from(`.${styles.heroImageWrapper}`, {
      opacity: 0,
      duration: 1.5,
      scale: 1.05
    }, "-=0.6");

    // Form Elements & Info Rows ScrollTrigger
    gsap.from(".gsap-contact-item", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.contactSplitSection}`,
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple feedback animation
    gsap.to(".gsap-submit-btn", {
      opacity: 0.5,
      duration: 0.2,
      yoyo: true,
      repeat: 3,
      onComplete: () => {
        setTimeout(() => {
          setIsSubmitting(false);
          alert("Thank you! Your inquiry has been sent.");
        }, 800);
      }
    });
  };

  return (
    <div className={styles.main} ref={containerRef}>
      
      {/* ── Immersive Clean Hero (Matches /about) ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroText}>
            <span className={`${styles.preTitle} gsap-hero-text`}>Contact EICAD</span>
            <h1 className={`${styles.mainTitle} gsap-hero-text`}>
              <span style={{ fontWeight: '600' }}>LET'S</span><br/>
              CONNECT
            </h1>
            <p className={`${styles.heroDesc} gsap-hero-text`}>
              Whether you are looking to build a luxury residence, design a commercial space, 
              or need expert architectural consultation, our team is ready to assist you.
            </p>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" 
            alt="EICAD Contact Architecture" 
            fill
            sizes="100vw"
            className={styles.heroImage}
            priority
          />
          <div className={styles.imageOverlay} />
        </div>
      </section>

      {/* ── Elegant Split Form & Info (Matches /about Philosophy) ── */}
      <section className={styles.contactSplitSection}>
        <div className="container">
          <div className={styles.contactSplit}>
            
            {/* Left: Form */}
            <div className={styles.contactLeft}>
              <h2 className={`${styles.sectionTitle} gsap-contact-item`}>Send Us a<br/>Message</h2>
              
              <form className={styles.formGrid} onSubmit={handleSubmit}>
                <div className={styles.inputRow}>
                  <div className={`${styles.formItem} gsap-contact-item`}>
                    <input type="text" id="firstName" required placeholder=" " />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className={`${styles.formItem} gsap-contact-item`}>
                    <input type="text" id="lastName" required placeholder=" " />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>

                <div className={`${styles.formItem} gsap-contact-item`}>
                  <input type="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className={`${styles.formItem} gsap-contact-item`}>
                  <select id="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="architecture">Architecture</option>
                    <option value="construction">Construction</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="consulting">Online Consulting</option>
                  </select>
                  <label htmlFor="service">Service Needed</label>
                </div>

                <div className={`${styles.formItem} gsap-contact-item`}>
                  <textarea id="message" rows={4} required placeholder=" "></textarea>
                  <label htmlFor="message">Project Details</label>
                </div>

                <button 
                  type="submit" 
                  className={`${styles.submitBtn} gsap-submit-btn gsap-contact-item`}
                  disabled={isSubmitting}
                >
                  <span className={styles.btnText}>{isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}</span>
                  {!isSubmitting && (
                    <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Info */}
            <div className={styles.contactRight}>
              <div className={styles.infoList}>
                <div className={`${styles.infoRow} gsap-contact-item`}>
                  <h3>LOCATION</h3>
                  <p>
                    TUNIS, TUNISIA<br />
                    MONTRÉAL, CANADA<br />
                    <span style={{ opacity: 0.65 }}>{siteConfig.locationsLine}</span>
                  </p>
                </div>

                <div className={`${styles.infoRow} gsap-contact-item`}>
                  <h3>CONTACT</h3>
                  <p>
                    <a href={`mailto:${siteConfig.contact.email}`} className={styles.linkHover}>{siteConfig.contact.email}</a><br/>
                    {siteConfig.contact.phones.map((phone, idx) => (
                      <span key={idx}>
                        <a href={`tel:+${phone.number}`} className={styles.linkHover}>{phone.label}</a>
                        <br/>
                      </span>
                    ))}
                  </p>
                </div>

                <div className={`${styles.infoRow} gsap-contact-item`}>
                  <h3>HOURS</h3>
                  <p>MON - FRI: 9:00 AM - 6:00 PM<br/>SAT & SUN: CLOSED</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
