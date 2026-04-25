'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../app/page.module.css';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollTitleProps {
  part1: string;
  part2: string;
  part3?: string;
}

export default function HorizontalScrollTitle({ part1, part2, part3 }: HorizontalScrollTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray('.scroll-row') as HTMLElement[];

      rows.forEach((row, index) => {
        const isEven = index % 2 === 1;
        const xMove = 600; // Even wider travel for dramatic effect
        const rotationAngle = 45; // Aggressive Y rotation for deep curve
        const zDepth = -500; // Deep spatial displacement

        gsap.fromTo(row,
          { 
            x: isEven ? xMove : -xMove,
            rotationY: isEven ? -rotationAngle : rotationAngle,
            z: zDepth,
            opacity: 0,
            scale: 0.6 // Start smaller for better distance feeling
          },
          {
            x: isEven ? -xMove : xMove,
            rotationY: isEven ? rotationAngle : -rotationAngle,
            z: 0,
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5, // Slightly slower for heavy 3D feel
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={styles.servicesTitleCenter} 
      style={{ 
        gap: '1rem', 
        padding: '20vh 0',
        perspective: '800px', // Stronger perspective for extreme 3D
        transformStyle: 'preserve-3d',
        overflow: 'visible'
      }}
    >
      <span 
        className="scroll-row" 
        style={{ 
          display: 'block', 
          whiteSpace: 'nowrap',
          willChange: 'transform, opacity'
        }}
      >
        {part1}
      </span>
      <span 
        className="scroll-row" 
        style={{ 
          display: 'block', 
          whiteSpace: 'nowrap',
          willChange: 'transform, opacity'
        }}
      >
        {part2}
      </span>
      {part3 && (
        <span 
          className="scroll-row" 
          style={{ 
            display: 'block', 
            whiteSpace: 'nowrap',
            willChange: 'transform, opacity'
          }}
        >
          {part3}
        </span>
      )}
    </div>
  );
}
