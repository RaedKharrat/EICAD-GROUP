'use client';

import React from 'react';
import styles from './StatsMarquee.module.css';

const STATS = [
  "15+ YEARS OF MASTERY",
  "200+ COMPLETED PROJECTS",
  "30+ GLOBAL AWARDS",
  "500+ LUXURY HOMES",
  "12 COUNTRIES COVERED",
  "VISIONARY DESIGN",
  "SUSTAINABLE INNOVATION"
];

export default function StatsMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {/* Render twice for seamless loop */}
        {[...STATS, ...STATS].map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.dot}>●</span>
            <span className={styles.text}>{stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
