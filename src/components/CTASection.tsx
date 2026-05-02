'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './CTASection.module.css';

interface Caption {
  label: string;
  text: string;
}

interface CTASectionProps {
  preTitle?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  videoSrc?: string;
  captions?: Caption[];
}

const DEFAULT_CAPTIONS: Caption[] = [
  { label: '01 — VISION', text: 'DESIGNING SPACES\nTHAT INSPIRE' },
  { label: '02 — CRAFT', text: 'WHERE VISION\nMEETS STRUCTURE' },
  { label: '03 — PRECISION', text: 'PRECISION IN\nEVERY DETAIL' },
  { label: '04 — LEGACY', text: 'LUXURY\nREDEFINED' },
];

const CTA_REVEAL_SECS = 3;

export default function CTASection({
  preTitle,
  title,
  description,
  buttonText,
  buttonHref,
  videoSrc = '/0501.mp4',
  captions = DEFAULT_CAPTIONS,
}: CTASectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const timecodeRef = useRef<HTMLDivElement>(null);
  const ctaPanelRef = useRef<HTMLDivElement>(null);
  const scrollLabelRef = useRef<HTMLSpanElement>(null);

  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    let rafId: number;

    const initInteraction = () => {
      const dur = video.duration;
      if (!dur || !isFinite(dur)) return;

      video.pause();

      // Create the exact physical scroll distance
      const PX_PER_SEC = 150;
      wrapper.style.height = `calc(100vh + ${dur * PX_PER_SEC}px)`;

      const captionPhaseDur = dur - CTA_REVEAL_SECS;
      const timePerCaption = captionPhaseDur / captions.length;

      // Pure Native Render Loop (No GSAP, No React State)
      // This maps 1-to-1 with Lenis instantly and solves all "stuck" bugs.
      const render = () => {
        const rect = wrapper.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;

        // 0. TV Expansion Effect (Entry animation before sticking)
        let ep = 1 - (rect.top / window.innerHeight);
        ep = Math.min(1, Math.max(0, ep)); // 0 at bottom of screen, 1 when hitting top
        
        // Cubic ease out for smoother expansion
        const easeEp = 1 - Math.pow(1 - ep, 3);
        
        if (sectionRef.current) {
          const hInset = 10 * (1 - easeEp); // Starts with 10vw horizontal padding
          const vInset = 10 * (1 - easeEp); // Starts with 10vh vertical padding
          const br = 60 * (1 - easeEp);     // Starts with 60px border radius
          sectionRef.current.style.clipPath = `inset(${vInset}vh ${hInset}vw round ${br}px)`;
        }

        if (scrollable > 0) {
          // Calculate exact scroll progress inside the wrapper
          let p = -rect.top / scrollable;
          p = Math.min(1, Math.max(0, p)); // clamp 0-1

          const ct = p * dur;

          // 1. Scrub Video (0.01 threshold prevents MP4 decode choking)
          if (Math.abs(video.currentTime - ct) > 0.01) {
            video.currentTime = ct;
          }

          // 2. Progress Bar & Timecode
          if (progressFillRef.current) progressFillRef.current.style.width = `${p * 100}%`;
          if (timecodeRef.current) {
            const m = String(Math.floor(ct / 60)).padStart(2, '0');
            const s = String(Math.floor(ct % 60)).padStart(2, '0');
            timecodeRef.current.innerText = `${m}:${s}`;
          }

          // 3. Captions Math
          captionRefs.current.forEach((cap, i) => {
            if (!cap) return;
            const start = i * timePerCaption;
            const end = start + timePerCaption;

            if (ct >= start && ct < end) {
              const localTime = ct - start;
              if (localTime < 0.5) {
                // Fade in
                const t = localTime / 0.5;
                cap.style.opacity = t.toString();
                cap.style.transform = `translateY(${(1 - t) * 30}px)`;
              } else if (localTime > timePerCaption - 0.5) {
                // Fade out
                const fadeOutTime = timePerCaption - localTime;
                const t = fadeOutTime / 0.5;
                cap.style.opacity = t.toString();
                cap.style.transform = `translateY(${-(1 - t) * 20}px)`;
              } else {
                // Fully visible
                cap.style.opacity = '1';
                cap.style.transform = `translateY(0px)`;
              }
            } else {
              cap.style.opacity = '0';
            }
          });

          // 4. CTA Panel Reveal
          const ctaStart = dur - CTA_REVEAL_SECS;
          if (ct >= ctaStart) {
            const localTime = ct - ctaStart;
            const t = Math.min(1, localTime / 1); // 1s fade

            if (ctaPanelRef.current) {
              ctaPanelRef.current.style.opacity = t.toString();
              ctaPanelRef.current.style.transform = `translateY(${(1 - t) * 40}px)`;
              ctaPanelRef.current.style.pointerEvents = t > 0.5 ? 'auto' : 'none';
            }
            if (scrollLabelRef.current) {
              scrollLabelRef.current.innerText = t > 0.5 ? 'CONTINUE SCROLLING ↓' : 'SCROLL TO EXPLORE';
            }
          } else {
            if (ctaPanelRef.current) {
              ctaPanelRef.current.style.opacity = '0';
              ctaPanelRef.current.style.pointerEvents = 'none';
            }
            if (scrollLabelRef.current) {
              scrollLabelRef.current.innerText = 'SCROLL TO EXPLORE';
            }
          }
        }

        rafId = requestAnimationFrame(render);
      };

      rafId = requestAnimationFrame(render);
    };

    if (video.readyState >= 1) {
      initInteraction();
    } else {
      video.addEventListener('loadedmetadata', initInteraction, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [captions.length]);

  return (
    <div ref={wrapperRef} className={styles.ctaWrapper}>
      <section ref={sectionRef} className={styles.cta}>

        {/* Full-bleed video */}
        <video
          ref={videoRef}
          className={styles.videoBg}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
        />

        {/* Dark overlay */}
        <div className={styles.overlay} />

        {/* Film-grain */}
        <div className={styles.noise} />

        {/* ── Rotating captions (absolute positioned) ── */}
        {captions.map((caption, i) => (
          <div
            key={i}
            ref={el => { captionRefs.current[i] = el; }}
            className={styles.captionArea}
          >
            <span className={styles.captionLabel}>{caption.label}</span>
            <p className={styles.captionText}>
              {caption.text.split('\n').map((line, j) => (
                <span key={j} className={styles.captionLine}>{line}</span>
              ))}
            </p>
          </div>
        ))}

        {/* ── Full CTA content (slides in at end) ── */}
        <div ref={ctaPanelRef} className={styles.ctaPanel}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{description}</p>
          <Link href={buttonHref} className={styles.ctaBtn}>
            {buttonText}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Scroll-progress bar */}
        <div className={styles.progressBar}>
          <div ref={progressFillRef} className={styles.progressFill} style={{ width: '0%' }} />
          <span ref={scrollLabelRef} className={styles.progressLabel}>
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* Corner brackets */}
        <span className={`${styles.corner} ${styles.cornerTL}`} />
        <span className={`${styles.corner} ${styles.cornerTR}`} />
        <span className={`${styles.corner} ${styles.cornerBL}`} />
        <span className={`${styles.corner} ${styles.cornerBR}`} />

        {/* Timecode */}
        <div ref={timecodeRef} className={styles.timecode}>00:00</div>

      </section>
    </div>
  );
}
