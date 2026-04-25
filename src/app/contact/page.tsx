import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us | EICAD Group",
  description: "Get in touch with EICAD Group for your next architecture or interior design project.",
};

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <div className="splitHeader">
            <div>
              <h1 className="slide-up">
                <span style={{ fontWeight: '600' }}>LET'S</span><br/>
                CONNECT
              </h1>
            </div>
            <div className="splitHeaderRight">
              <p className="slide-up" style={{ animationDelay: "0.2s" }}>
                Whether you are looking to build a luxury residence, design a commercial space, 
                or need expert architectural consultation, our team is ready to assist you.
              </p>
              <div className="arrowCircleWrapper">
                <div className="arrowCircle arrowCircleBlack">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="7" y1="7" x2="17" y2="17"></line>
                    <polyline points="17 7 17 17 7 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          
          <div className={`${styles.formWrapper} slide-up`} style={{ animationDelay: "0.3s" }}>
            <h2><span style={{ fontWeight: '600' }}>Send us</span> a message</h2>
            <form className={styles.contactForm}>
              <div className={styles.inputRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="service">Service Needed</label>
                <select id="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="architecture">Architecture Design</option>
                  <option value="interior">Interior Design</option>
                  <option value="construction">Construction</option>
                  <option value="consulting">Online Consulting</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} required></textarea>
              </div>
              <button type="submit" className={`btn btn-accent ${styles.submitBtn}`}>
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className={`${styles.infoWrapper} slide-up`} style={{ animationDelay: "0.4s" }}>
            <div className={styles.infoBlock}>
              <h3>Our Headquarters</h3>
              <p>123 Luxury Avenue, Suite 400<br/>Design District, NY 10001</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Contact Info</h3>
              <p>contact@eicadgroup.com<br/>+1 (555) 123-4567</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday & Sunday: Closed</p>
            </div>
            <div className={styles.mapWrapper}>
              {/* Mock map using a placeholder image for aesthetics */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625688534002!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy">
              </iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
