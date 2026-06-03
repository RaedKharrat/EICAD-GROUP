'use client';

import React from 'react';
import styles from './StatsMarquee.module.css';
import { siteConfig } from '@/lib/siteConfig';

interface StatData {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const STATS: StatData[] = [
  {
    value: '14+',
    label: 'Years of expertise',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: String(siteConfig.services.length),
    label: 'Core services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    value: '2',
    label: 'Tunisia & Canada',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    value: 'Online',
    label: 'Worldwide',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function StatsMarquee() {
  const marqueeItems = [...STATS, ...STATS, ...STATS, ...STATS];

  return (
    <div className={styles.statsContainer}>
      <div className={styles.tickerWrap}>
        <div className={styles.ticker}>
          {marqueeItems.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.icon}>{stat.icon}</span>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.separator}>—</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
