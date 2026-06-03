"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./project-detail.module.css";

type ProjectGalleryProps = {
  images: string[];
  projectTitle: string;
};

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, showPrev, showNext]);

  return (
    <>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={styles.galleryItem}
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${projectTitle} image ${index + 1} full size`}
          >
            <Image
              src={image}
              alt={`${projectTitle} detail ${index + 1}`}
              fill
              className={styles.galleryImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 33vw"
            />
            <span className={styles.galleryExpandHint} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
              Enlarge
            </span>
          </button>
        ))}
      </div>

      {isOpen && activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} image viewer`}
          onClick={close}
        >
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={close}
              aria-label="Close image viewer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
                  onClick={showPrev}
                  aria-label="Previous image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            <div className={styles.lightboxImageWrap}>
              <Image
                src={images[activeIndex]}
                alt={`${projectTitle} detail ${activeIndex + 1}`}
                fill
                className={styles.lightboxImage}
                sizes="100vw"
                priority
              />
            </div>

            <p className={styles.lightboxCaption}>
              <span>{projectTitle}</span>
              <span className={styles.lightboxCounter}>
                {activeIndex + 1} / {images.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
