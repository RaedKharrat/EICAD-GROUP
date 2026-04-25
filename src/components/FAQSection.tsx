'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: "What is EICAD Group's design philosophy?",
    answer: "Our philosophy is rooted in the belief that architecture should be a seamless blend of visionary aesthetics and functional permanence. We design spaces that not only look breathtaking but also enhance the daily lives of those who inhabit them."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, our portfolio spans ultra-luxury residential homes, high-end commercial spaces, and cultural landmarks. Our diverse expertise allows us to bring a unique, sophisticated perspective to any scale of project."
  },
  {
    question: "How does the consultation process work?",
    answer: "It begins with an initial dialogue to deeply understand your vision and lifestyle. From there, we move into conceptual sketches, 3D visualizations, and finally, meticulous architectural blueprints, ensuring you are involved at every step."
  },
  {
    question: "Are sustainable practices integrated into your designs?",
    answer: "Absolutely. We view sustainability not as an option, but as a fundamental requirement. We utilize advanced materials, energy-efficient systems, and passive design strategies to create structures that respect the environment."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faqGrid}>
          <div className={styles.faqHeader}>
            <span className={styles.preTitle}>Inquiries</span>
            <h2 className={styles.title}><span style={{ fontWeight: '600' }}>FREQUENTLY</span><br />ASKED<br /><span style={{ fontWeight: '600' }}>QUESTIONS</span></h2>
          </div>
          
          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={styles.faqQuestionRow}>
                    <h3 className={styles.question}>{faq.question}</h3>
                    <div className={styles.iconWrapper}>
                      <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                    </div>
                  </div>
                  <div className={styles.faqAnswerWrapper}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
